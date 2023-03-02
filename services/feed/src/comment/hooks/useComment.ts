import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { queryKeys } from '../../utils/queryKeys';
import { getComment } from '../apis';

export const useComment = () => {
    const router = useRouter();
    const postId = router.query.postId as string;
    const queryKey = queryKeys.getComment(postId);
    return useQuery([queryKey], () => getComment(postId));
};
