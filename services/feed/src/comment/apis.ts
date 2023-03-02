import { instance } from '../utils/axios';
import { queryKeys } from '../utils/queryKeys';
import { GetCommentResponseType } from './types';

export const getComment = async (feedId: string) => {
    const uri = queryKeys.getComment(feedId);
    const response = await instance.get<GetCommentResponseType>(uri);
    return response.data;
};
