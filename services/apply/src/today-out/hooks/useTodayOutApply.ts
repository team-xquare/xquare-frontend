import { useMutation } from 'react-query';
import todayOutApplyRequest from '../apis';
import { sendBridgeEvent } from '@shared/xbridge';
const useTodayOutApply = () => {
    return useMutation(todayOutApplyRequest, {
        onSuccess: () => {
            sendBridgeEvent('back', true);
        },
        onError: () => {
            sendBridgeEvent('error', {
                message: '외출 신청을 실패하였습니다.',
            });
        },
    });
};

export default useTodayOutApply;
