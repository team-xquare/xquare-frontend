import { useMutation } from '@tanstack/react-query';
import { deleteComment } from '../apis';

const useDeleteComment = () => {
    return useMutation(deleteComment);
};

export default useDeleteComment;
