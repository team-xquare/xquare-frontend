import { instance } from '../utils/axios';
import { queryKeys } from '../utils/queryKeys';
import { ResponseStudyRoom, StudyRoomId } from './types';

export const getStudyRoom = async () => {
    const paths = queryKeys.getStudyRoomList();
    const { data } = await instance.get<ResponseStudyRoom>(paths);
    return data;
};

export const postStudyRoom = async (props: StudyRoomId) => {
    await instance.post('/study-room', props);
};

export const getMyStudyRoomStatus = async () => {
    const path = queryKeys.getStudyRoomStatus();
    const { data } = await instance.get<StudyRoomId>(path);
    return data;
};

export const deleteMyStudyRoomStatus = async (props: StudyRoomId) => {
    await instance.delete(`/study-room/${props.study_room_id}`);
};
