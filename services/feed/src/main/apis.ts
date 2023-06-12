import { instance } from '../utils/axios';
import { queryKeys } from '../utils/queryKeys';
import { FeedDto, FeedRequestParams, GetFeedListResponseDto } from './types';

export const getFeed = async (feedId: string) => {
    const feedListKey = queryKeys.getFeed(feedId);
    const { data } = await instance.get<FeedDto>(feedListKey);
    return data;
};

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

export const postReportFeed = async (params: FeedRequestParams) => {
    return await instance.post('/report', params);
};
