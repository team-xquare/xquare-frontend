import { useMutation, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '../../utils/queryKeys';
import { deleteComment } from '../apis';

const useDeleteComment = (commentId: string) => {
    const queryClient = useQueryClient();
    const commentKey = queryKeys.getComment(commentId);
    return useMutation(() => deleteComment(commentId), {
        onSuccess: () => {
            queryClient.invalidateQueries([commentKey]);
        },
    });
};

export default useDeleteComment;
