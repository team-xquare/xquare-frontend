import type { GetServerSideProps, NextPage } from 'next';
import { Button } from '@semicolondsm/ui';
import MainPageTemplate from '../common/templates/MainPageTemplate';
import { FlexCol, FlexRow } from '../common/Flexbox';
import { dehydrate, QueryClient, useMutation, useQuery, useQueryClient } from 'react-query';
import { queryKeys } from '../utils/queryKeys';
import { getStayList, getStayStatus, getWeekMealStatus, putStayStatus } from '../main/apis';
import ApplyBox from '../main/components/ApplyContainer';
import AdditionalApplyItem from '../main/components/AdditionalApplyItem';
import WeekendMealApplyBox from '../main/components/WeekendMealApplyBox';
import { StayStatus } from '../main/types';
import styled from '@emotion/styled';
import dormitoryStudyIcon from '../assets/dormitaryStudy.png';

const Apply: NextPage = () => {
    const queryClient = useQueryClient();
    const stayStatusKey = queryKeys.getStayStatus();
    const stayListKey = queryKeys.getStayList();

    const { data: stayList } = useQuery(stayListKey, getStayList);
    const { data: stayStatus } = useQuery(stayStatusKey, getStayStatus);

    const { mutate: putStayStatusMutate } = useMutation(putStayStatus, {
        onMutate: async (newStatus) => {
            await queryClient.cancelQueries(stayStatusKey);
            const previousStatus = queryClient.getQueryData(stayStatusKey);
            queryClient.setQueryData(stayStatusKey, newStatus);
            return { previousStatus };
        },
        onError: (error, _, context) => {
            alert(error);
            queryClient.setQueryData(stayStatusKey, context as StayStatus);
        },
        onSettled: () => {
            queryClient.invalidateQueries(stayStatusKey);
        },
    });

    return (
        <MainPageTemplate>
            <FlexCol gap={16}>
                <ApplyBox title="잔류 신청" subTitle="목요일 10시까지는 잔류 신청을 완료해주세요.">
                    <WeekendStayWrapper gap={8}>
                        {stayList?.codes.map((item, idx) => (
                            <Button
                                onClick={() => {
                                    putStayStatusMutate({ status: item.name });
                                }}
                                fill={item.name === stayStatus?.status ? 'purple' : 'default'}
                                key={idx}
                                size="sm">
                                {item.value}
                            </Button>
                        ))}
                    </WeekendStayWrapper>
                </ApplyBox>
                <ApplyBox
                    title="주말급식 신청"
                    subTitle="신청여부는 담임선생님께서 확인 후 전달되요.">
                    <WeekendMealApplyBox />
                </ApplyBox>
                <ApplyBox title="추가 신청">
                    <AdditionalApplyItem
                        applyKind="자습실 신청"
                        daliy="오늘"
                        linkTo="/dormitory-study"
                        icon={dormitoryStudyIcon.src}
                    />

                    {/*TODO: <AdditionalApplyItem
                        applyKind="주말 외출 신청"
                        daliy=""
                        linkTo="/dormitory-study"
                    /> */}
                </ApplyBox>
            </FlexCol>
        </MainPageTemplate>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const queryClient = new QueryClient();
    const stayStatusKey = queryKeys.getStayStatus();
    const stayListKey = queryKeys.getStayList();
    const weekendMealKey = queryKeys.getWeekMeal();
    await Promise.all([
        queryClient.prefetchQuery(stayStatusKey, getStayStatus),
        queryClient.prefetchQuery(stayListKey, getStayList),
        queryClient.prefetchQuery(weekendMealKey, getWeekMealStatus),
    ]);
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
};

const WeekendStayWrapper = styled(FlexRow)`
    white-space: nowrap;
    overflow-x: scroll;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export default Apply;
