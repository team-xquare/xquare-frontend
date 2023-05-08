import { InfiniteData, useMutation, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '../../utils/queryKeys';
import { deleteFeedLike, postFeedLike } from '../apis';
import { GetFeedListResponseDto } from '../types';

const useFeedLike = (categoryId: string) => {
    const queryClient = useQueryClient();
    const feedListKey = queryKeys.getFeedList(categoryId);
    const previousFeedData = queryClient.getQueryData<InfiniteData<GetFeedListResponseDto>>([
        feedListKey,
    ]);

    const previousFeedPages = previousFeedData?.pages;

    const feedLikeMutateFn = (feedId: string) => {
        const getLikeFeed = previousFeedPages
            ?.flatMap((feedList) => feedList.feeds)
            .find((feed) => feedId === feed.feed_id);
        return getLikeFeed?.is_like ? deleteFeedLike(feedId) : postFeedLike(feedId);
    };

    return useMutation(feedLikeMutateFn, {
        onMutate: (feedId) => {
            queryClient.cancelQueries([feedListKey]);
            const currentFeedList = previousFeedPages?.map((feedList) => ({
                feeds: feedList.feeds.map((feed) =>
                    feed.feed_id === feedId
                        ? {
                              ...feed,
                              is_like: !feed.is_like,
                              like_count: !feed.is_like ? feed.like_count + 1 : feed.like_count - 1,
                          }
                        : feed,
                ),
            }));

            queryClient.setQueryData([feedListKey], {
                pages: currentFeedList || [],
                pageParams: previousFeedData?.pageParams || [],
            });

            return { pages: previousFeedPages || [], pageParams: [] };
        },
        onError: (error, _, context) => {
            queryClient.setQueryData([feedListKey], context);
        },
    });
};

export default useFeedLike;
