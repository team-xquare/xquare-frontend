import { useMutation, useQuery, useQueryClient } from 'react-query';
import { feedInstance, pointInstance } from '.';
import { Notice } from './types';

export const useNoticeQuery = () => {
    const fetcher = async (): Promise<Notice[]> => (await feedInstance.get('/writer')).data.feeds;

    return useQuery('notice', fetcher);
};

export const useDeleteNoticeMutation = () => {
    const queryClient = useQueryClient();

    return useMutation((id: string) => feedInstance.delete(`/${id}`), {
        onSuccess: () => {
            queryClient.invalidateQueries(['notice']);
        },
    });
};

export const useUpdateNoticeMutation = () => {
    const queryClient = useQueryClient();

    return useMutation(
        ({ feed_id, ...params }: Partial<{ feed_id: string; content: string }>) =>
            feedInstance.patch(`/${feed_id}`, params),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['notice']);
            },
        },
    );
};

export const useAddNoticeMutation = () => {
    const queryClient = useQueryClient();

    return useMutation((params: Partial<Notice>) => feedInstance.post('/', params), {
        onSuccess: () => {
            queryClient.invalidateQueries(['notice']);
        },
    });
};

export const useCommentQuery = (noticeId: string) => {
    return useQuery(
        ['comment'],
        async (): Promise<Comment> =>
            (await feedInstance.get(`/comments/${noticeId}`)).data.comments,
    );
};
