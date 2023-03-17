import { queryKeys } from '../../utils/queryKeys';
import { QueryClient, useQuery } from '@tanstack/react-query';
import { getFeedList } from '../apis';

const useFeedList = (categoryId?: string) => {
    const feedListKey = queryKeys.getFeedList(categoryId || '');
    return useQuery([feedListKey], () => getFeedList(categoryId));
};

export const prefetchFeedList = (queryClient: QueryClient) => {
    const feedListKey = queryKeys.getFeedList('');
    return queryClient.prefetchQuery([feedListKey], () => getFeedList());
};

export default useFeedList;
