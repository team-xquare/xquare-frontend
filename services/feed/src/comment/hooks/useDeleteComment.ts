import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { queryKeys } from '../../utils/queryKeys';
import { deleteComment } from '../apis';

const useDeleteComment = (commentId: string) => {
    const router = useRouter();
    const queryClient = useQueryClient();
    const postId = router.query.postId as string;
    const commentsKey = queryKeys.getComment(postId);
    return useMutation(() => deleteComment(commentId), {
        onSuccess: () => {
            queryClient.invalidateQueries([commentsKey]);
        },
    });
};

export default useDeleteComment;
