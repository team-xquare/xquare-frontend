import { useMutation, useQueryClient } from 'react-query';
import axiosErrorTemplate from '../../utils/function/axiosErrorTemplate';

import { queryKeys } from '../../utils/queryKeys';
import { postStudyRoom } from '../apis';
import { StudyRoomId } from '../types';

const useSetStudyRoom = () => {
    const studyRoomKey = queryKeys.getStudyRoomList();
    const studyRoomStatusKey = queryKeys.getStudyRoomStatus();
    const queryClient = useQueryClient();
    return useMutation(postStudyRoom, {
        onMutate: async (newStatus) => {
            await queryClient.cancelQueries(studyRoomStatusKey);
            const previousStatus = queryClient.getQueryData(studyRoomStatusKey);
            queryClient.setQueryData(studyRoomStatusKey, newStatus);
            return { previousStatus };
        },
        onError: (error, _, context) => {
            queryClient.setQueryData(studyRoomStatusKey, context as StudyRoomId);
            axiosErrorTemplate(error);
        },
        onSettled: () => queryClient.invalidateQueries(studyRoomKey),
    });
};

export default useSetStudyRoom;
