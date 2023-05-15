import { instance, pickInstance } from '../utils/axios';
import { queryKeys } from '../utils/queryKeys';
import { GetWeekOutTimeResponse, WeekendOutParam } from './types';

export const postWeekendOut = async (param: WeekendOutParam) => {
    const weekendOutUrl = queryKeys.getPicnic();
    return await instance.post(weekendOutUrl, param);
};

export const getWeekendOut = async () => {
    const weekendOutUrl = queryKeys.getPicnic();
    const { data } = await instance.get<WeekendOutParam>(weekendOutUrl);
    return data;
};

export const patchWekendOut = async (param: WeekendOutParam) => {
    const weekendOutUrl = queryKeys.getPicnic();
    return await instance.patch(weekendOutUrl, param);
};

export const getWeekOutTime = async () => {
    const weekOutTimeUrl = queryKeys.getWeekOutTime();
    const { data } = await instance.get<GetWeekOutTimeResponse>(weekOutTimeUrl);
    return data;
};
