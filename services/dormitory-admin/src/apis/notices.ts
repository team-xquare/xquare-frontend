import { useMutation, useQuery, useQueryClient } from 'react-query';
import { feedInstance, pointInstance } from '.';
import { Category, Comment, Notice } from './types';
import toast from 'react-hot-toast';
export const useNoticeQuery = () => {
    const fetcher = async (): Promise<Notice[]> => (await feedInstance.get('/writer')).data.feeds;

    return useQuery('notice', fetcher, {
        onError: () => {
            toast.error('피드 리스트 조회를 실패하였습니다.');
        },
    });
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
        ({ feed_id, ...params }: Partial<{ feed_id: string; content: string; title: string }>) =>
            feedInstance.patch(`/${feed_id}`, params),
        {
            onSuccess: () => {
                toast.success('수정이 완료되었습니다.');
                queryClient.invalidateQueries(['notice']);
            },
        },
    );
};

export const useAddNoticeMutation = () => {
    const queryClient = useQueryClient();

    return useMutation(
        async (params: Partial<Notice>) => {
            const categoryResponse = await feedInstance.get<{ category_list: Category[] }>(
                '/category',
            );
            const noticeCategory = categoryResponse.data.category_list.filter(
                (category) => category.name === '공지사항',
            )[0];

            return await feedInstance.post('/', {
                ...params,
                category_id: noticeCategory.category_id,
                type: 'DOD',
            });
        },
        {
            onSuccess: () => {
                toast.success('게시물 추가를 성공했습니다.');
                queryClient.invalidateQueries(['notice']);
            },
            onError: () => {
                toast.error('게시물 추가를 실패하였습니다.');
            },
        },
    );
};

export const useCommentQuery = (noticeId: string) => {
    return useQuery(
        ['comment', noticeId],
        async (): Promise<Comment[]> =>
            (await feedInstance.get(`/comments/${noticeId}`)).data.comments,
    );
};

export const useDeleteComment = (commentId: string) => {
    const queryClient = useQueryClient();
    return useMutation(async () => await feedInstance.delete(`/comments/${commentId}`), {
        onSuccess: () => {
            queryClient.invalidateQueries(['comment', commentId]);
        },
    });
};
