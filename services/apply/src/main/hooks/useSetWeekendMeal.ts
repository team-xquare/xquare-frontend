import axios from 'axios';
import axiosErrorTemplate from '../../utils/function/axiosErrorTemplate';
import { sendBridgeEvent } from '@shared/xbridge';
import { useMutation, useQueryClient } from 'react-query';
import { queryKeys } from '../../utils/queryKeys';
import { patchWeekendMeal } from '../apis';
import { WeekendMealStatus } from '../types';

const useSetWeekendMeal = () => {
    const queryClient = useQueryClient();
    const weekendmealKey = queryKeys.getWeekMeal();
    return useMutation(patchWeekendMeal, {
        onMutate: async (data) => {
            await queryClient.cancelQueries(weekendmealKey);
            const previousStatus = queryClient.getQueryData<WeekendMealStatus>(weekendmealKey);
            if (previousStatus) {
                queryClient.setQueryData<WeekendMealStatus>(weekendmealKey, {
                    ...previousStatus,
                    status: data.status,
                });
            }
            return { previousStatus };
        },
        onError: (error, _, context) => {
            queryClient.setQueryData(weekendmealKey, context as boolean);
            if (axios.isAxiosError(error)) {
                if (error.request.status === 400) {
                    sendBridgeEvent('error', {
                        message: '주말 급식 신청에 실패하였습니다.',
                    });
                } else {
                    axiosErrorTemplate(error);
                }
            }
        },
        onSettled: () => {
            queryClient.invalidateQueries(weekendmealKey);
        },
    });
};

export default useSetWeekendMeal;
