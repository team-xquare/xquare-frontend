import { useMutation, useQueryClient } from 'react-query';
import axiosErrorTemplate from '../../utils/function/axiosErrorTemplate';
import { queryKeys } from '../../utils/queryKeys';
import { putStayStatus } from '../apis';
import { StayStatus } from '../types';
import { sendBridgeEvent } from '@shared/xbridge';

const useSetStayStatus = () => {
    const queryClient = useQueryClient();
    const stayStatusKey = queryKeys.getStayStatus();

    return useMutation(putStayStatus, {
        onMutate: async (newStatus) => {
            await queryClient.cancelQueries(stayStatusKey);
            const previousStatus = queryClient.getQueryData(stayStatusKey);
            queryClient.setQueryData(stayStatusKey, newStatus);
            return { previousStatus };
        },
        onSuccess: () => {
            sendBridgeEvent('success', {
                title: '안내',
                message: '잔류신청이 변경되었습니다.',
            });
        },
        onError: (error, _, context) => {
            queryClient.setQueryData(stayStatusKey, context as StayStatus);
            sendBridgeEvent('error', {
                message: '잔류신청이 마감되었습니다. 사감실에 문의해주세요.'
            })
        },
        onSettled: () => {
            queryClient.invalidateQueries(stayStatusKey);
        },
    });
};

export default useSetStayStatus;
