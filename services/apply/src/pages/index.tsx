import type { GetServerSideProps, NextPage } from 'next';
import { Button } from '@semicolondsm/ui';
import MainPageTemplate from '../common/components/templates/MainPageTemplate';
import { FlexCol, FlexRow } from '../common/components/Flexbox';
import { dehydrate, QueryClient } from 'react-query';
import ApplyBox from '../main/components/ApplyContainer';
import AdditionalApplyItem from '../main/components/AdditionalApplyItem';
import WeekendMealApplyBox from '../main/components/WeekendMealApplyBox';
import styled from '@emotion/styled';
import dormitoryStudyIcon from '../assets/dormitaryStudy.png';
import useStayStatus, { prefetchStayStatus } from '../main/hooks/useStayStatus';
import useStayList, { prefetchStayList } from '../main/hooks/useStayList';
import useSetStayStatus from '../main/hooks/useSetStayStatus';
import { prefetchWeekendMeal } from '../main/hooks/useWeekendMeal';
import ridingIcon from '../assets/riding.png';
import { useOnWeek, useOnTime } from '../utils/function/useApplyItem';

const Apply: NextPage = () => {
    const { data: stayList } = useStayList();
    const { data: stayStatus } = useStayStatus();
    const { mutate: putStayStatusMutate } = useSetStayStatus();

    return (
        <MainPageTemplate isShowRight={true}>
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
                {/* {<ApplyBox
                    title="주말급식 신청"
                    subTitle="신청여부는 담임선생님께서 확인 후 전달돼요.">
                    <WeekendMealApplyBox />
                </ApplyBox>} */}
                <ApplyBox title="추가 신청">
                    <AdditionalApplyItem
                        applyKind="교실 이동"
                        daliy="오늘"
                        linkTo="/class-move"
                        rightButtonText="제출"
                        icon={ridingIcon.src}
                        isDay={['월', '화', '수', '목', '금']}
                        isTime={[
                            [16, 40],
                            [20, 30],
                        ]}
                    />
                    <AdditionalApplyItem
                        applyKind="외출 신청"
                        daliy="오늘"
                        rightButtonText="신청"
                        linkTo="/today-out"
                        icon={ridingIcon.src}
                        isDay={['월', '화', '수', '목', '금']}
                        isTime={[
                            [8, 40],
                            [20, 30],
                        ]}
                    />
                    <AdditionalApplyItem
                        applyKind="자습실 신청"
                        daliy="오늘"
                        linkTo="/dormitory-study"
                        icon={dormitoryStudyIcon.src}
                        isDay={['월', '화', '수', '목', '금']}
                        isTime={[
                            [20, 30],
                            [23, 30],
                        ]}
                        isEverytime={['토', '일']}
                    />
                    <AdditionalApplyItem
                        applyKind="주말 외출 신청"
                        daliy="이번주 주말"
                        linkTo="/weekend-out"
                        icon={ridingIcon.src}
                        isDay={['금', '토', '일']}
                        isTime={[
                            [20, 30],
                            [11, 30],
                        ]}
                    />
                </ApplyBox>
            </FlexCol>
        </MainPageTemplate>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const queryClient = new QueryClient();
    await Promise.all([
        prefetchStayStatus(queryClient),
        prefetchStayList(queryClient),
        prefetchWeekendMeal(queryClient),
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
