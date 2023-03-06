import { attachmentInstance, authoritiesInstance, instance } from '../utils/axios';
import { queryKeys } from '../utils/queryKeys';
import { GetAuthorityResponse, PostFeedResponse } from './types';

export const getUserPermissions = async (categoryKey: string) => {
    const uri = queryKeys.getPermissions(categoryKey);
    const response = await authoritiesInstance.get<GetAuthorityResponse>(uri);
    return response.data.authority_list;
};

export const postAddFeed = async (param: PostFeedResponse) => {
    const uri = '/';
    return await instance.post<{ id: string }>(uri, param);
};

export const postFeedImage = async (feedId: string, imageUrl: string[]) => {
    const uri = `/images/${feedId}`;
    return await instance.post(uri, {
        attachments_url: imageUrl,
    });
};

export const deleteFeedImage = async (feedId: string) => {
    const uri = `/images/${feedId}`;
    return await instance.delete(uri);
};

export const patchFeedImage = async (feedId: string, imageUrl: string[]) => {};

export const postAttachment = async (files: File[]) => {
    const formData = new FormData();
    files.forEach((file) => formData.append('files', file));

    const response = await attachmentInstance.post<{ filesUrl: string[] }>(
        '?bucketName=xquare',
        formData,
        {
            headers: {
                'Content-type': 'multipart/form-data',
            },
        },
    );
    return response.data;
};
