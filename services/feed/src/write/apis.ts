import { authoritiesInstance, instance } from '../utils/axios';
import { queryKeys } from '../utils/queryKeys';
import { GetAuthorityResponse, PostFeedResponse } from './types';

export const getUserPermissions = async (categoryKey: string) => {
    const uri = queryKeys.getPermissions(categoryKey);
    const response = await authoritiesInstance.get<GetAuthorityResponse>(uri);
    return response.data.authority_list;
};

export const postAddFeed = async (param: PostFeedResponse) => {
    const uri = '/';
    return await instance.post(uri, param);
};
