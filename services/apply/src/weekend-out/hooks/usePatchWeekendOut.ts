import { useMutation } from 'react-query';
import { sendBridgeEvent } from '@shared/xbridge';
import { patchWeekendOut } from '../apis';

const usePatchWeekendOut = () => {
    return useMutation(patchWeekendOut, {
        onSuccess: () => {
            sendBridgeEvent('back', true);
        },
        onError: () => {
            sendBridgeEvent('error', {
                message: '주말 외출 수정에 실패하였습니다.',
            });
        },
    });
};

export default usePatchWeekendOut;
