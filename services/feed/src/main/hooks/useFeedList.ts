import { queryKeys } from '../../utils/queryKeys';
import { QueryClient, useQuery } from '@tanstack/react-query';
import { getFeed, getFeedList } from '../apis';

const useFeedList = (feedId: string) => {
    return useQuery(['getFeed'], () => getFeed(feedId), {
        enabled: !!feedId,
    });
};

export const prefetchFeedList = (queryClient: QueryClient) => {
    const feedListKey = queryKeys.getFeedList('');
    return queryClient.prefetchQuery([feedListKey], () => getFeedList());
};

export default useFeedList;
