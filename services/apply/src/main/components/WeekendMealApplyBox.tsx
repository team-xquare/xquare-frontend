import styled from '@emotion/styled';
import { Botton, Button } from '@semicolondsm/ui';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { queryKeys } from '../../utils/queryKeys';
import { getWeekMealStatus, postWeekendMeal } from '../apis';
import { sendBridgeEvent, useBridgeHandler } from '@shared/xbridge';
import { WeekendMealStatus } from '../types';

const WeekendMealApplyBox = () => {
    const queryClient = useQueryClient();
    const weekendmealKey = queryKeys.getWeekMeal();
    const { data: weekendMealStatus } = useQuery(weekendmealKey, getWeekMealStatus);
    const { mutate, isLoading } = useMutation(postWeekendMeal, {
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
            alert(error);
            queryClient.setQueryData(weekendmealKey, context as boolean);
        },
        onSettled: () => {
            queryClient.invalidateQueries(weekendmealKey);
        },
    });

    useBridgeHandler('confirm', ({ detail }) => {
        detail.success && mutate({ apply: !weekendMealStatus?.applied });
    });

    const onMealApply = () => {
        const result = sendBridgeEvent(
            'confirm',
            {
                message: '주말급식은 신청해야\n먹을 수 있어요',
                confirmText: '신청하기',
                cancelText: '다음에 하기',
            },
            ({ data }) => {
                return confirm(data.message);
            },
        );
        result && mutate({ apply: !weekendMealStatus?.applied });
    };

    return (
        <MealApplyWrapper>
            <Botton>{weekendMealStatus?.title}</Botton>
            <MealApplyButton
                loading={isLoading}
                size="sm"
                fill={weekendMealStatus?.applied ? 'border' : 'purple'}
                onClick={onMealApply}>
                {weekendMealStatus?.applied ? '취소하기' : '신청하기'}
            </MealApplyButton>
        </MealApplyWrapper>
    );
};

const MealApplyButton = styled(Button)`
    border-radius: 8px;
`;

const MealApplyWrapper = styled.div`
    width: 100%;
    height: 56px;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    border-radius: 12px;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.gray50};
`;

export default WeekendMealApplyBox;
