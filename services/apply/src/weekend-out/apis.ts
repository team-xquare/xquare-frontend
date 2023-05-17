import { instance, pickInstance } from '../utils/axios';
import { queryKeys } from '../utils/queryKeys';
import { GetWeekOutTimeResponse, WeekendOutRequestParam, WeekendOutResponseParam } from './types';

export const postWeekendOut = async (param: WeekendOutRequestParam) => {
    const weekendOutUrl = queryKeys.getPicnic();
    return await instance.post(weekendOutUrl, param);
};

export const getWeekendOut = async () => {
    const weekendOutUrl = queryKeys.getPicnic();
    const { data } = await instance.get<WeekendOutResponseParam>(weekendOutUrl);
    return data;
};

export const patchWeekendOut = async (param: WeekendOutRequestParam) => {
    const weekendOutUrl = queryKeys.getPicnic();
    return await instance.patch(weekendOutUrl, param);
};

export const getWeekOutTime = async () => {
    const weekOutTimeUrl = queryKeys.getWeekOutTime();
    const { data } = await instance.get<GetWeekOutTimeResponse>(weekOutTimeUrl);
    return data;
};
