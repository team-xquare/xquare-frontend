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
