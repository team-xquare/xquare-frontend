import { queryKeys } from '../../utils/queryKeys';
import { useMutation, useQuery } from 'react-query';
import { getWeekendOut, patchWeekendOut, postWeekendOut } from '../apis';
import { sendBridgeEvent } from '@shared/xbridge';
import useWeekOutTime from './useWeekOutTime';
import axios from 'axios';

const usePostWeekendOut = () => {
    return useMutation(postWeekendOut, {
        onSuccess: () => {
            sendBridgeEvent('back', true);
        },
        onError: (e) => {
            let errorMessage = '주말외출 신청에 실패하였습니다.';
            if (axios.isAxiosError(e)) {
                switch (e.response?.status) {
                    case 400:
                        errorMessage = '지금은 주말외출 신청을 할수 없습니다.';
                        break;
                    case 409:
                        errorMessage = '주말외출 신청은 한번만 신청할수 있습니다.';
                        break;
                }
            }
            sendBridgeEvent('error', {
                message: errorMessage,
            });
        },
    });
};

export default usePostWeekendOut;
