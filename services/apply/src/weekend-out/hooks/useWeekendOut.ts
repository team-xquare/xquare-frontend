import { queryKeys } from './../../utils/queryKeys';
import { useMutation, useQuery } from 'react-query';
import { getWeekendOut, patchWekendOut, postWeekendOut } from '../apis';
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

export const useGetWeekendOut = () => {
    const getWeekendOutKey = queryKeys.getPicnic();
    return useQuery(getWeekendOutKey, getWeekendOut);
};

export const usePatchWeekendOut = () => {
    return useMutation(patchWekendOut, {
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

export default usePostWeekendOut;
