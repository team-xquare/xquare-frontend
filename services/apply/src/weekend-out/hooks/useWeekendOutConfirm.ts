import { useBridgeHandler } from '@shared/xbridge';
import useGetWeekendOut from './useGetWeekendOut';
import usePatchWeekendOut from './usePatchWeekendOut';
import usePostWeekendOut from './usePostWeekendOut';

type timeStateType = {
    endTime: string;
    startTime: string;
};

type inputStateType = {
    arrangement: string;
    reason: string;
};

const useWeekendOutConfirm = (timeState: timeStateType, inputState: inputStateType) => {
    const { data: weekendOutData } = useGetWeekendOut();
    const { mutate: weekendOutMutate } = usePostWeekendOut();
    const { mutate: patchWeekendOut } = usePatchWeekendOut();

    const ChangeWeekendOutConfirm = useBridgeHandler(
        'confirm',
        (e) => {
            e.detail.success &&
                (weekendOutData
                    ? patchWeekendOut({
                          end_time: timeState.endTime,
                          start_time: timeState.startTime,
                          arrangement: inputState.arrangement || ' ',
                          reason: inputState.reason,
                      })
                    : weekendOutMutate({
                          end_time: timeState.endTime,
                          start_time: timeState.startTime,
                          arrangement: inputState.arrangement || ' ',
                          reason: inputState.reason,
                      }));
        },
        {
            cancelText: '취소하기',
            confirmText: weekendOutData ? '수정하기' : '신청하기',
            message: weekendOutData ? '외출을 수정하겠습니까?' : '외출을 신청하겠습니까?',
        },
    );

    return ChangeWeekendOutConfirm;
};

export default useWeekendOutConfirm;
