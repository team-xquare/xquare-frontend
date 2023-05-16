import { useQuery, QueryClient } from 'react-query';
import { queryKeys } from '../../utils/queryKeys';
import { getWeekendOut } from '../apis';

const useGetWeekendOut = () => {
    const queryKey = queryKeys.getPicnic();
    return useQuery(queryKey, getWeekendOut);
};

export const prefetchWeekendOut = (queryClient: QueryClient) => {
    const queryKey = queryKeys.getPicnic();
    return queryClient.prefetchQuery(queryKey, getWeekendOut)
}

export default useGetWeekendOut