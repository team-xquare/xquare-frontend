import { useMutation, useQueryClient } from 'react-query';
import axiosErrorTemplate from '../../utils/function/axiosErrorTemplate';
import { queryKeys } from '../../utils/queryKeys';
import { postWeekendMeal } from '../apis';
import { WeekendMealStatus } from '../types';

const useSetWeekendMeal = () => {
    const queryClient = useQueryClient();
    const weekendmealKey = queryKeys.getWeekMeal();
    return useMutation(postWeekendMeal, {
        onMutate: async (data) => {
            await queryClient.cancelQueries(weekendmealKey);
            const previousStatus = queryClient.getQueryData<WeekendMealStatus>(weekendmealKey);
            if (previousStatus) {
                queryClient.setQueryData<WeekendMealStatus>(weekendmealKey, {
                    ...previousStatus,
                    applied: data.apply,
                });
            }
            return { previousStatus };
        },
        onError: (error, _, context) => {
            queryClient.setQueryData(weekendmealKey, context as boolean);
            axiosErrorTemplate(error);
        },
        onSettled: () => {
            queryClient.invalidateQueries(weekendmealKey);
        },
    });
};

export default useSetWeekendMeal;
