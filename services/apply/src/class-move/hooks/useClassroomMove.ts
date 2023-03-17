import { useMutation } from 'react-query';
import useTimeTable from '../../common/hooks/useTimeTable';
import { postClassroomMove } from '../apis';
import { sendBridgeEvent } from '@shared/xbridge';
const useClassroomMove = () => {
    const currentPeriod = useTimeTable();
    return useMutation(
        (classroomId: string) => postClassroomMove({ classroomId, period: currentPeriod || 1 }),
        {
            onSuccess: () => {
                sendBridgeEvent('back', true);
            },
            onError: () => {
                sendBridgeEvent('error', {
                    message: '교실이동 신청을 실패하였습니다.',
                });
            },
        },
    );
};

export default useClassroomMove;
