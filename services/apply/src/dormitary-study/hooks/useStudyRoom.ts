import { QueryClient, useQuery } from 'react-query';
import axiosErrorTemplate from '../../utils/function/axiosErrorTemplate';
import { queryKeys } from '../../utils/queryKeys';
import { getStudyRoom } from '../apis';

const useStudyRoom = () => {
    const studyRoomKey = queryKeys.getStudyRoomList();
    return useQuery(studyRoomKey, getStudyRoom, {
        onError: (error) => {
            axiosErrorTemplate(error);
        },
    });
};

export const prefetchStudyRoom = (queryClient: QueryClient) => {
    const studyRoomKey = queryKeys.getStudyRoomList();
    return queryClient.prefetchQuery(studyRoomKey, getStudyRoom);
};

export default useStudyRoom;
