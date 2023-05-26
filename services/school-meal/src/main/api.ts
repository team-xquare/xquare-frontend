import { instance } from '../utils/axios';
import { queryKeys } from '../utils/queryKeys';
import { MealList } from './type';

export const getMealList = async (year: number, month: number) => {
    const uri = queryKeys.getMealList(year, month);
    const response = await instance.get<MealList>(uri);
    return response.data;
};
