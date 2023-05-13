import { QueryClient, useQuery } from 'react-query';
import { queryKeys } from '../../utils/queryKeys';
import { getWeekOutTime } from '../apis';

const useWeekOutTime = () => {
    const weekOutKey = queryKeys.getWeekOutTime();
    return useQuery(weekOutKey, getWeekOutTime, {
        staleTime: Infinity,
    });
};

export const prefetchWeekOutTime = (queryClient: QueryClient) => {
    const weekOutKey = queryKeys.getWeekOutTime();
    return queryClient.prefetchQuery(weekOutKey, getWeekOutTime, {
        staleTime: Infinity,
    });
};

export default useWeekOutTime;
