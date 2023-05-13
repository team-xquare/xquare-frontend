import { useQuery } from 'react-query';
import { queryKeys } from '../../utils/queryKeys';
import dateFormat from '../../utils/function/dateFormat';
import { getTodaylMeal } from '../api';

const useTodayMeal = () => {
    const todayMealKey = queryKeys.getTodaylMeal(dateFormat());
    return useQuery(todayMealKey, getTodaylMeal);
};

export default useTodayMeal;
