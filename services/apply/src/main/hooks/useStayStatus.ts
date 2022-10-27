import { QueryClient, useQuery } from 'react-query';
import axiosErrorTemplate from '../../utils/function/axiosErrorTemplate';
import { queryKeys } from '../../utils/queryKeys';
import { getStayStatus } from '../apis';

const useStayStatus = () => {
    const stayStatusKey = queryKeys.getStayStatus();
    return useQuery(stayStatusKey, getStayStatus, {
        onError: (error) => {
            axiosErrorTemplate(error);
        },
    });
};

export const prefetchStayStatus = (queryClient: QueryClient) => {
    const stayStatusKey = queryKeys.getStayStatus();
    return queryClient.prefetchQuery(stayStatusKey, getStayStatus);
};

export default useStayStatus;
