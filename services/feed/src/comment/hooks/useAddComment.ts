import { useMutation, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '../../utils/queryKeys';
import { postAddComment } from '../apis';

const useAddComments = (feedId: string) => {
    const queryClient = useQueryClient();
    return useMutation((content: string) => postAddComment({ content, feed_uuid: feedId }), {
        onSuccess: () => {
            const commentKey = queryKeys.getComment(feedId);
            queryClient.invalidateQueries([commentKey]);
        },
    });
};

export default useAddComments;
