import { pickInstance } from '../utils/axios';
import { queryKeys } from '../utils/queryKeys';
import { ClassroomListType, GetClassroomRequestParam } from './types';

export const getClassroomList = async (param: GetClassroomRequestParam) => {
    const uri = queryKeys.getClassroomList(param.floor, param.type);
    const response = await pickInstance.get<ClassroomListType>(uri);
    return response.data;
};
