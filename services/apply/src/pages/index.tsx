import type { GetServerSideProps, NextPage } from 'next';
import { Button } from '@semicolondsm/ui';
import MainPageTemplate from '../common/templates/MainPageTemplate';
import { FlexCol, FlexRow } from '../common/Flexbox';
import { useState } from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { queryKeys } from '../utils/queryKeys';
import { getStayList, getStayStatus } from '../main/apis';
import ApplyBox from '../main/components/ApplyContainer';
import AdditionalApplyItem from '../main/components/AdditionalApplyItem';

const Apply: NextPage = () => {
    const stayStatusKey = queryKeys.getStayStatus();
    const stayListKey = queryKeys.getStayList();

    const { data: stayList } = useQuery(stayListKey, getStayList);
    const { data: stayStatus } = useQuery(stayStatusKey, getStayStatus);

    const [residualApply, setResidualApply] = useState<string>(stayStatus?.status || 'STAY');
    const [weekendApply, setWeekendApply] = useState<string>('신청');

    return (
        <MainPageTemplate>
            <FlexCol gap={16}>
                <ApplyBox title="잔류 신청" subTitle="목요일 10시까지는 잔류 신청을 완료해주세요.">
                    <>
                        {stayList?.codes.map((item, idx) => (
                            <Button
                                onClick={() => setResidualApply(item.code)}
                                fill={item.code === residualApply ? 'purple' : 'default'}
                                key={idx}
                                size="sm">
                                {item.value}
                            </Button>
                        ))}
                    </>
                </ApplyBox>
                <ApplyBox
                    title="주말급식 신청"
                    subTitle="신청여부는 담임선생님께서 확인 후 전달되요.">
                    {['신청', '미신청'].map((item, idx) => (
                        <Button
                            onClick={() => setWeekendApply(item)}
                            fill={item === weekendApply ? 'purple' : 'default'}
                            key={idx}
                            size="sm">
                            {item}
                        </Button>
                    ))}
                </ApplyBox>
                <ApplyBox title="추가 신청">
                    <AdditionalApplyItem
                        applyKind="자습실 신청"
                        daliy="오늘"
                        linkTo="/dormitory-study"
                    />
                </ApplyBox>
            </FlexCol>
        </MainPageTemplate>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const queryClient = new QueryClient();
    const stayStatusKey = queryKeys.getStayStatus();
    const stayListKey = queryKeys.getStayList();
    await Promise.all([
        queryClient.prefetchQuery(stayStatusKey, getStayStatus),
        queryClient.prefetchQuery(stayListKey, getStayList),
    ]);
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
};

export default Apply;
