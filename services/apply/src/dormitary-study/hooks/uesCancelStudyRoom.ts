import { QueryClient, useMutation, useQueryClient } from 'react-query';
import axiosErrorTemplate from '../../utils/function/axiosErrorTemplate';
import { queryKeys } from '../../utils/queryKeys';
import { deleteMyStudyRoomStatus } from '../apis';
import { StudyRoomId } from '../types';

const useCancelStudyRoom = () => {
    const queryClient = useQueryClient();
    const studyRoomStatusKey = queryKeys.getStudyRoomStatus();
    const studyRoomKey = queryKeys.getStudyRoomList();
    return useMutation(deleteMyStudyRoomStatus, {
        onMutate: async () => {
            await queryClient.cancelQueries(studyRoomKey);
            await queryClient.cancelQueries(studyRoomStatusKey);
            const previousStatus = queryClient.getQueryData(studyRoomStatusKey);
            queryClient.setQueryData(studyRoomStatusKey, { study_room_id: '' });
            return { previousStatus };
        },
        onError: (error, _, context) => {
            axiosErrorTemplate(error);
            queryClient.setQueryData(studyRoomStatusKey, context?.previousStatus as StudyRoomId);
        },
        onSettled: () => queryClient.invalidateQueries(studyRoomKey),
    });
};

export default useCancelStudyRoom;
