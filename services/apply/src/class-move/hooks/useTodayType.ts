import dayjs from 'dayjs';
import { QueryClient, useQuery } from 'react-query';
import { ONE_DAY } from '../../constant/classMove';
import dateFormat from '../../utils/function/dateFormat';
import { queryKeys } from '../../utils/queryKeys';
import { getTodayType } from '../apis';

const useTodayType = () => {
    const queryKey = queryKeys.getTodayType(dateFormat());
    return useQuery(queryKey, getTodayType, {
        staleTime: ONE_DAY,
    });
};

export const prefetchTodayType = (queryClient: QueryClient) => {
    const todayTypeKey = queryKeys.getTodayType(dateFormat());
    return queryClient.prefetchQuery(todayTypeKey, getTodayType, {
        staleTime: ONE_DAY,
    });
};

export default useTodayType;
