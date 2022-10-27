import { QueryClient, useQuery } from 'react-query';
import axiosErrorTemplate from '../../utils/function/axiosErrorTemplate';
import { queryKeys } from '../../utils/queryKeys';
import { getMyStudyRoomStatus } from '../apis';

const useMyStudyRoom = () => {
    const studyRoomStatusKey = queryKeys.getStudyRoomStatus();
    return useQuery(studyRoomStatusKey, getMyStudyRoomStatus, {
        onError: (error) => {
            axiosErrorTemplate(error);
        },
    });
};

export const prefetchMyStudyRoom = (queryClient: QueryClient) => {
    const studyRoomStatusKey = queryKeys.getStudyRoomStatus();
    queryClient.prefetchQuery(studyRoomStatusKey, getMyStudyRoomStatus);
};

export default useMyStudyRoom;
