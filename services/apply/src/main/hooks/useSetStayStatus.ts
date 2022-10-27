import { useMutation, useQueryClient } from 'react-query';
import axiosErrorTemplate from '../../utils/function/axiosErrorTemplate';
import { queryKeys } from '../../utils/queryKeys';
import { putStayStatus } from '../apis';
import { StayStatus } from '../types';

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
        onError: (error, _, context) => {
            queryClient.setQueryData(stayStatusKey, context as StayStatus);
            axiosErrorTemplate(error);
        },
        onSettled: () => {
            queryClient.invalidateQueries(stayStatusKey);
        },
    });
};

export default useSetStayStatus;
