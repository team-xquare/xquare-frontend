import { useMutation } from 'react-query';
import todayOutApplyRequest from '../apis';
import { sendBridgeEvent } from '@shared/xbridge';
import axios from 'axios';
const useTodayOutApply = () => {
    return useMutation(todayOutApplyRequest, {
        onSuccess: () => {
            sendBridgeEvent('back', true);
        },
        onError: (e) => {
            let errorMessage = '외출 신청을 실패하였습니다.';
            if (axios.isAxiosError(e)) {
                switch (e.response?.status) {
                    case 401:
                        errorMessage = '주말에는 주말 외출 신청을 이용해주세요.';
                        break;
                    case 409:
                        errorMessage = '외출 신청은 한번만 신청할수 있습니다.';
                        break;
                }
            }
            sendBridgeEvent('error', {
                message: errorMessage,
            });
        },
    });
};

export default useTodayOutApply;