import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import axiosErrorTemplate from '../../utils/function/axiosErrorTemplate';
import { queryKeys } from '../../utils/queryKeys';
import { postStudyRoom } from '../apis';
import { StudyRoomId } from '../types';
import { sendBridgeEvent } from '@shared/xbridge';

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
        onError: (error: unknown, _, context) => {
            queryClient.setQueryData(studyRoomStatusKey, context as StudyRoomId);
            if (axios.isAxiosError(error)) {
                if (error.request.status === 400) {
                    sendBridgeEvent('error', {
                        message: '지금은 자습실을 신청할수 없습니다.',
                    });
                } else {
                    axiosErrorTemplate(error);
                }
            }
        },
        onSettled: () => queryClient.invalidateQueries(studyRoomKey),
    });
};

export default useSetStudyRoom;
