import { QueryClient, useQuery } from 'react-query';
import axiosErrorTemplate from '../../utils/function/axiosErrorTemplate';
import { queryKeys } from '../../utils/queryKeys';
import { getWeekMealStatus } from '../apis';

const useWeekendMeal = () => {
    const weekendmealKey = queryKeys.getWeekMeal();
    return useQuery(weekendmealKey, getWeekMealStatus, {
        onError: (error) => {
            axiosErrorTemplate(error);
        },
    });
};

export const prefetchWeekendMeal = (queryClient: QueryClient) => {
    const weekendMealKey = queryKeys.getWeekMeal();
    return queryClient.prefetchQuery(weekendMealKey, getWeekMealStatus);
};

export default useWeekendMeal;
