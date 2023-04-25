import { instance } from '../utils/axios';
import { queryKeys } from '../utils/queryKeys';
import { GetFeedListResponseDto } from './types';

export const getFeedList = async (categoryId?: string, dateTime?: string) => {
    const feedListKey = queryKeys.getFeedList(categoryId, dateTime);
    const { data } = await instance.get<GetFeedListResponseDto>(feedListKey);
    return data;
};

export const postFeedLike = async (feedId: string) => {
    return await instance.post(`/likes/${feedId}`);
};

export const deleteFeedLike = async (feedId: string) => {
    return await instance.delete(`/likes/${feedId}`);
};

export const deleteFeed = async (feedId: string) => {
    return await instance.delete(`/${feedId}`);
};
