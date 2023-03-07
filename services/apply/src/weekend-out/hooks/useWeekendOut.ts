import { useMutation } from 'react-query';
import { postWeekendOut } from '../apis';
import { sendBridgeEvent } from '@shared/xbridge';
const useWeekendOut = () => {
    return useMutation(postWeekendOut, {
        onSuccess: () => {
            sendBridgeEvent('back', true);
        },
        onError: () => {
            sendBridgeEvent('error', {
                message: '주말외출 신청을 실패하였습니다.',
            });
        },
    });
};

export default useWeekendOut;
