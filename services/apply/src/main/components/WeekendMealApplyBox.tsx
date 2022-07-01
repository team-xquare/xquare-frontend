import styled from '@emotion/styled';
import { Botton, Button } from '@semicolondsm/ui';
import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import MainButton from '../../common/MainButton';
import { queryKeys } from '../../utils/queryKeys';
import { getWeekMealStatus, postWeekendMeal } from '../apis';
import { WeekendMealStatus } from '../types';
import { sendBridgeEvent } from '@shared/xbridge';
const WeekendMealApplyBox = () => {
    const queryClient = useQueryClient();
    const weekendmealKey = queryKeys.getWeekMeal();
    const { data: weekendMealStatus } = useQuery(weekendmealKey, getWeekMealStatus);
    const { mutate, isLoading } = useMutation(postWeekendMeal, {
        onSuccess: () => queryClient.invalidateQueries(weekendmealKey),
    });

    const onMealApply = () => {
        mutate({ apply: !weekendMealStatus?.applied });
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
    align-items: center;
    background-color: ${({ theme }) => theme.colors.gray50};
`;

export default WeekendMealApplyBox;
