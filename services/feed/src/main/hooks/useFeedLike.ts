import { useMutation, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '../../utils/queryKeys';
import { deleteFeedLike, postFeedLike } from '../apis';
import { FeedType } from '../types';

const useFeedLike = (categoryId: string) => {
    const queryClient = useQueryClient();
    const feedListKey = queryKeys.getFeedList(categoryId);
    const preivousFeedList = queryClient.getQueryData<{ feeds: FeedType[] }>([feedListKey])?.feeds;

    const feedLikeMutateFn = (feedId: string) => {
        const getLike = preivousFeedList?.filter((feed) => feedId === feed.feed_id)[0];
        return getLike?.is_like ? deleteFeedLike(feedId) : postFeedLike(feedId);
    };

    return useMutation(feedLikeMutateFn, {
        onMutate: (feedId) => {
            queryClient.cancelQueries([feedListKey]);
            const currentFeedList = preivousFeedList?.map((feed) =>
                feed.feed_id === feedId
                    ? {
                          ...feed,
                          is_like: !feed.is_like,
                          like_count: !feed.is_like ? feed.like_count + 1 : feed.like_count - 1,
                      }
                    : feed,
            );
            queryClient.setQueryData([feedListKey], { feeds: currentFeedList });
            return { feeds: preivousFeedList };
        },
        onError: (error, _, context) => {
            queryClient.setQueryData([feedListKey], context);
        },
    });
};

export default useFeedLike;
