import { QueryClient, useQuery } from 'react-query';
import { ONE_DAY } from '../../constant/classMove';
import { queryKeys } from '../../utils/queryKeys';
import { getClassroomList } from '../apis';
import { GetClassroomRequestParam } from '../types';

const useClassroom = (param: GetClassroomRequestParam) => {
    const queryKey = queryKeys.getClassroomList(param.floor, 'SELF_STUDY'); //todo
    return useQuery(queryKey, () => getClassroomList(param), {
        staleTime: ONE_DAY,
    });
};

export const prefetchClassroom = (queryClient: QueryClient, param: GetClassroomRequestParam) => {
    const queryKey = queryKeys.getClassroomList(param.floor, param.type);
    return queryClient.prefetchQuery(queryKey, () => getClassroomList(param), {
        staleTime: ONE_DAY,
    });
};

export default useClassroom;
