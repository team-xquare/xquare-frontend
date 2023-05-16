import { queryKeys } from '../../utils/queryKeys';
import { useMutation, useQuery } from 'react-query';
import { getWeekendOut, patchWeekendOut, postWeekendOut } from '../apis';
import { sendBridgeEvent } from '@shared/xbridge';
import useWeekOutTime from './useWeekOutTime';

const usePostWeekendOut = () => {
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

export default usePostWeekendOut;
