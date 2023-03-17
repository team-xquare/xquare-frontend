import { instance, pickInstance } from '../utils/axios';
import { PostWeekendOutRequestParam } from './types';

export const postWeekendOut = async (param: PostWeekendOutRequestParam) => {
    const uri = `/picnic`;
    return await instance.post(uri, param);
};
