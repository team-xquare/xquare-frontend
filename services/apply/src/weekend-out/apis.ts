import { pickInstance } from '../utils/axios';
import { PostWeekendOutRequestParam } from './types';

export const postWeekendOut = async (param: PostWeekendOutRequestParam) => {
    const uri = `/applications`;
    return await pickInstance.post(uri, param);
};
