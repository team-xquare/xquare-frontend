import { instance, pickInstance } from '../utils/axios';
import { queryKeys } from '../utils/queryKeys';
import { GetWeekOutTimeResponse, PostWeekendOutRequestParam } from './types';

export const postWeekendOut = async (param: PostWeekendOutRequestParam) => {
    const uri = `/picnic`;
    return await instance.post(uri, param);
};

export const getWeekOutTime = async () => {
    const weekOutTimeUrl = queryKeys.getWeekOutTime();
    const { data } = await instance.get<GetWeekOutTimeResponse>(weekOutTimeUrl);
    return data;
};
