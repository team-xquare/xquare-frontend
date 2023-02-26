import { instance } from '../utils/axios';
import { queryKeys } from '../utils/queryKeys';
import { GetCategoryResponseDto } from './types';

export const getCategory = async () => {
    const categoryUrl = queryKeys.getCategoryList();
    const { data } = await instance.get<GetCategoryResponseDto>(categoryUrl);
    return data;
};
