import { useMutation, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '../../utils/queryKeys';
import { deleteFeed } from '../apis';
import { sendBridgeEvent } from '@shared/xbridge';
const useDeleteFeed = (feedId: string, categoryId: string) => {
    const queryClient = useQueryClient();
    return useMutation(() => deleteFeed(feedId), {
        onSuccess: () => {
            const feedListKey = queryKeys.getFeedList(categoryId || '');
            queryClient.invalidateQueries([feedListKey]);
        },
        onError: () => {
            sendBridgeEvent('error', {
                message: `피드 삭제에 실패하였습니다.`,
            });
        },
    });
};

export default useDeleteFeed;
