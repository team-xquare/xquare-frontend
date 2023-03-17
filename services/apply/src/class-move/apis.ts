import { pickInstance } from '../utils/axios';
import { queryKeys } from '../utils/queryKeys';
import {
    ClassroomListType,
    GetClassroomRequestParam,
    PostClassroomRequestParam,
    TodayType,
} from './types';
import dateFormat from '../utils/function/dateFormat';

export const getClassroomList = async (param: GetClassroomRequestParam) => {
    const uri = queryKeys.getClassroomList(param.floor, param.type);
    const response = await pickInstance.get<ClassroomListType>(uri);
    return response.data;
};

export const postClassroomMove = async (param: PostClassroomRequestParam) => {
    const uri = `/applications/${param.classroomId}`;
    return await pickInstance.post(uri, { period: param.period });
};

export const getTodayType = async () => {
    const uri = queryKeys.getTodayType(dateFormat());
    const response = await pickInstance.get<TodayType>(uri);
    return response.data;
};
