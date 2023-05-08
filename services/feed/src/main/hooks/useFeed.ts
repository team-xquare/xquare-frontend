import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../../utils/queryKeys';
import { getFeed } from '../apis';

const useFeed = (feedId: string) => {
    const feedKey = queryKeys.getFeed(feedId);
    return useQuery([feedKey], () => getFeed(feedId), {
        enabled: !!feedId,
    });
};

export default useFeed;
