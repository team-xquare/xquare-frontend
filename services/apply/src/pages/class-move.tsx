import Radio from '../class-move/components/Radio';
import { Button } from '@semicolondsm/ui';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import MainPageTemplate from '../common/components/templates/MainPageTemplate';
import TagButton from '../class-move/components/TagButton';
import useClassroom, { prefetchClassroom } from '../class-move/hooks/useClassroom';
import { GetServerSideProps } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { floorList, floorNumberSelector, FloorType } from '../constant/classMove';
import { useBridgeCallback, sendBridgeEvent, useBridgeHandler } from '@shared/xbridge';
import useTodayType, { prefetchTodayType } from '../class-move/hooks/useTodayType';
import { queryKeys } from '../utils/queryKeys';
import { TodayType } from '../class-move/types';
import dateFormat from '../utils/function/dateFormat';
import useClassroomMove from '../class-move/hooks/useClassroomMove';

const ClassMove = () => {
    const [stageValue, setStageValue] = useState<FloorType>(floorList[0]);
    const [classroomName, setClassroomName] = useState('');

    const { data: classroomData } = useClassroom({
        floor: floorNumberSelector[stageValue],
        type: 'SELF_STUDY',
    });

    const { mutate: classroomMoveMutate } = useClassroomMove();

    useEffect(() => {
        sendBridgeEvent('isRightButtonEnabled', { isEnabled: !!classroomName });
    }, [!classroomName]);
    const selectedClassroom = classroomData?.classroom_list.find(
        (classroom) => classroom.name === classroomName,
    );

    const classroomConfirm = useBridgeHandler(
        'confirm',
        (e) => {
            const selectedClassroom = classroomData?.classroom_list.find(
                (classroom) => classroom.name === classroomName,
            );
            e.detail.success && classroomMoveMutate(selectedClassroom?.classroom_id || '');
        },
        {
            cancelText: '취소하기',
            confirmText: '신청하기',
            message: '교실 이동을 신청하시겠습니까?',
        },
    );

    useBridgeCallback('rightButtonTaped', classroomConfirm, undefined);

    return (
        <MainPageTemplate>
            <RadioWrapper>
                <Radio
                    items={floorList}
                    flex="row"
                    ShowComponent={({ children }) => (
                        <TagButton
                            onClick={() => setStageValue(children)}
                            color={stageValue === children ? 'purple' : 'default'}>
                            {children}
                        </TagButton>
                    )}
                />
            </RadioWrapper>
            <Radio
                items={classroomData?.classroom_list.map((i) => i.name) || []}
                flex="grid"
                ShowComponent={({ children }) => (
                    <CustomButton
                        size="sm"
                        onClick={() => setClassroomName(children)}
                        fill={classroomName === children ? 'purple' : 'default'}>
                        {children}
                    </CustomButton>
                )}
            />
        </MainPageTemplate>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const queryClient = new QueryClient();
    const todayTypeKey = queryKeys.getTodayType(dateFormat());
    await prefetchTodayType(queryClient);
    const todayType = queryClient.getQueryData<TodayType>(todayTypeKey);
    await Promise.all([
        prefetchClassroom(queryClient, { floor: '1', type: todayType?.type || 'SELF_STUDY' }),
    ]);
    return {
        props: {
            dehydrateState: dehydrate(queryClient),
        },
    };
};

const CustomButton = styled(Button)`
    justify-content: center;
    border-radius: 8px;
`;

const RadioWrapper = styled.div`
    padding-bottom: 16px;
    width: 100%;
`;

export default ClassMove;
