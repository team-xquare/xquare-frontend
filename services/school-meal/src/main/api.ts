import { instance } from '../utils/axios';
import dateFormat from '../utils/function/dateFormat';
import { queryKeys } from '../utils/queryKeys';
import { MealList } from './type';

export const getTodaylMeal = async () => {
    const uri = queryKeys.getTodaylMeal(dateFormat());
    const response = await instance.get<MealList>(uri);
    return response.data;
};
