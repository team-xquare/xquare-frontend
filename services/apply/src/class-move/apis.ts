import { pickInstance } from '../utils/axios';
import { queryKeys } from '../utils/queryKeys';
import { ClassroomListType, GetClassroomRequestParam, PostClassroomRequestParam } from './types';

export const getClassroomList = async (param: GetClassroomRequestParam) => {
    const uri = queryKeys.getClassroomList(param.floor, param.type);
    const response = await pickInstance.get<ClassroomListType>(uri);
    return response.data;
};

export const postClassroomMove = async (param: PostClassroomRequestParam) => {
    const uri = `/applications/${param.classroomId}`;
    return await pickInstance.post(uri, { period: param.period });
};
