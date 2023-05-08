import { queryKeys } from '../../utils/queryKeys';
import { QueryClient, useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getFeed, getFeedList } from '../apis';
import { useMemo } from 'react';
import { useIntersect } from '../../common/hooks/useIntersect';

const useFeedList = (categoryId: string) => {
    const feedListKey = queryKeys.getFeedList(categoryId);
    const { data: feedListData, ...restQuery } = useInfiniteQuery(
        [feedListKey],
        ({ pageParam = null }) => getFeedList(categoryId, pageParam),
        {
            getNextPageParam: (lastPage) => {
                return lastPage.feeds.length === 6
                    ? lastPage.feeds[lastPage.feeds.length - 1].created_at
                    : undefined;
            },
        },
    );
    const feeds = useMemo(
        () => (feedListData ? feedListData.pages.flatMap((feed) => feed.feeds) : []),
        [feedListData],
    );

    const bottomRef = useIntersect(async (entry, observer) => {
        observer.unobserve(entry.target);
        if (restQuery.hasNextPage && !restQuery.isFetching && !restQuery.isError)
            restQuery.fetchNextPage();
    });

    const isShowSkeleton = feedListData && feedListData.pages.length && restQuery.hasNextPage;

    return { feeds, bottomRef, isShowSkeleton, ...restQuery };
};

export const prefetchFeedList = (queryClient: QueryClient) => {
    const feedListKey = queryKeys.getFeedList();
    return queryClient.prefetchInfiniteQuery([feedListKey], () => getFeedList());
};

export default useFeedList;
