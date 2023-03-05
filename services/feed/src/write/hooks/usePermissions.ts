import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../../utils/queryKeys';
import { getUserPermissions } from '../apis';

const usePermissions = (categoryKey: string) => {
    const queryKey = queryKeys.getPermissions(categoryKey);
    return useQuery([queryKey], () => getUserPermissions(categoryKey), {
        enabled: !!categoryKey,
        staleTime: 60 * 60 * 100 * 24,
    });
};

export default usePermissions;
