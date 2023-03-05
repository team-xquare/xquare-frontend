import { instance } from '../utils/axios';
import { queryKeys } from '../utils/queryKeys';
import { AddCommentRequestType, GetCommentResponseType } from './types';

export const getComment = async (feedId: string) => {
    const uri = queryKeys.getComment(feedId);
    const response = await instance.get<GetCommentResponseType>(uri);
    return response.data;
};

export const postAddComment = async (param: AddCommentRequestType) => {
    const uri = '/comments';
    return await instance.post(uri, param);
};

export const deleteComment = async (commentId: string) => {
    const uri = `/comments/${commentId}`;
    return await instance.delete(uri);
};
