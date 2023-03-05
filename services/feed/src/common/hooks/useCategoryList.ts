import { queryKeys } from '../../utils/queryKeys';
import { useQuery, QueryClient } from '@tanstack/react-query';
import { getCategory } from '../apis';

const ONE_DAY_TIME = 1000 * 60 * 60 * 24;

const useCategoryList = () => {
    const categoryListKey = queryKeys.getCategoryList();
    return useQuery([categoryListKey], getCategory, {
        staleTime: ONE_DAY_TIME,
        retry: 3,
    });
};

export const prefetchCategoryList = (queryClient: QueryClient) => {
    const categoryListKey = queryKeys.getCategoryList();
    return queryClient.prefetchQuery([categoryListKey], getCategory, {
        staleTime: ONE_DAY_TIME,
    });
};

export default useCategoryList;
