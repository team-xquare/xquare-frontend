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
                message: '주말외출 신청은 한번만 진행할 수 있습니다.',
            });
        },
    });
};

export default useWeekendOut;
