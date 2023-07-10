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
            onError: (e: any) => {
                let message = '교실이동 신청을 실패하였습니다.';
                const errorMessage = e.response?.data?.message;
                switch (e.response?.status) {
                    case 400:
                        switch (errorMessage) {
                            case 'Cannot Movement':
                                message = '교실이동은 한번만 신청할수 있습니다.';
                                break;
                            case 'After School Cannot Movement':
                                message = '방과후에는 교실이동을 할 수 없습니다.';
                                break;
                        }
                        break;
                    case 401:
                        message = '주말에는 교실이동을 할 수 없습니다.';
                        break;
                    case 409:
                        switch (errorMessage) {
                            case 'Class not found':
                                message = '존재하지 않는 교실입니다.';
                                break;
                            case 'Time not found':
                                message = '학교 수업시간에만 이동 가능합니다.';
                                break;
                        }
                        break;
                }
                console.log(message)
                sendBridgeEvent('error', {
                    message: message,
                });
            },
        },
    );
};

export default useClassroomMove;
