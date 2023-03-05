import { useMutation } from '@tanstack/react-query';
import { deleteFeed } from '../apis';

const useDeleteFeed = (feedId: string) => {
    return useMutation(() => deleteFeed(feedId));
};

export default useDeleteFeed;
