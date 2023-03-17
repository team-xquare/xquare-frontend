import { QueryClient, useQuery } from 'react-query';
import { ONE_DAY } from '../../constant/classMove';
import { queryKeys } from '../../utils/queryKeys';
import { getClassroomList } from '../apis';
import { GetClassroomRequestParam } from '../types';
import useTodayType from './useTodayType';

const useClassroom = (param: GetClassroomRequestParam) => {
    const { data: todayTypeData } = useTodayType();
    const queryKey = queryKeys.getClassroomList(param.floor, todayTypeData?.type || ''); //todo
    return useQuery(
        queryKey,
        () => getClassroomList({ floor: param.floor, type: todayTypeData?.type || '' }),
        {
            staleTime: ONE_DAY,
            enabled: !!todayTypeData,
        },
    );
};

export const prefetchClassroom = (queryClient: QueryClient, param: GetClassroomRequestParam) => {
    const queryKey = queryKeys.getClassroomList(param.floor, param.type);
    return queryClient.prefetchQuery(queryKey, () => getClassroomList(param), {
        staleTime: ONE_DAY,
    });
};

export default useClassroom;
