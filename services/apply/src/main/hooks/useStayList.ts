import { QueryClient, useQuery } from 'react-query';
import axiosErrorTemplate from '../../utils/function/axiosErrorTemplate';
import { queryKeys } from '../../utils/queryKeys';
import { getStayList } from '../apis';

const useStayList = () => {
    const stayListKey = queryKeys.getStayList();
    return useQuery(stayListKey, getStayList, {
        onError: (error) => {
            axiosErrorTemplate(error);
        },
    });
};

export const prefetchStayList = (queryClient: QueryClient) => {
    const stayListKey = queryKeys.getStayList();
    return queryClient.prefetchQuery(stayListKey, getStayList);
};

export default useStayList;
