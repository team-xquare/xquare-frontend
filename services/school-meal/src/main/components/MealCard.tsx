import React from 'react';
import styled from '@emotion/styled';
import showFocusCard from '../../utils/function/showFocusCard';

type mealTimeType = '아침' | '점심' | '저녁';

interface MealCardProps {
    mealTime: mealTimeType;
    mealList?: string[];
    mealKcal?: string;
    todayDate: string;
}

const MealCard = ({ mealTime, mealList, mealKcal, todayDate }: MealCardProps) => {
    const isFocus = showFocusCard(mealTime, todayDate);
    return (
        <MealCardWrapper isFocus={isFocus}>
            <MealContent height={50} size={25} isFocus={isFocus}>
                {mealTime}
            </MealContent>
            {mealList ? (
                mealList.map((food) => (
                    <MealContent key={food} height={40} size={20}>
                        {food}
                    </MealContent>
                ))
            ) : (
                <MealContent height={40} size={20}>
                    급식이 없습니다.
                </MealContent>
            )}
            <MealContent height={40} size={20}>
                {mealKcal}
            </MealContent>
        </MealCardWrapper>
    );
};

export default MealCard;

const MealCardWrapper = styled.div<{ isFocus: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 250px;
    height: 390px;
    border: 1px solid ${({ isFocus }) => (isFocus ? '#B885FF' : 'none')};
    border-radius: 10px;
    background-color: white;
    padding: 10px;
    box-shadow: rgba(50, 50, 93, 0.4) 0px 2px 5px -1px, rgba(0, 0, 0, 0.55) 0px 1px 3px -1px;
    transition: 0.4s;
    &:hover {
        width: 300px;
        height: 456px;
        border: 2px solid ${({ isFocus }) => (isFocus ? '#B885FF' : 'none')};
        box-shadow: rgba(0, 0, 0, 0.15) 0px 19px 38px, rgba(0, 0, 0, 0.11) 0px 15px 12px;
    }
`;

const MealContent = styled.div<{ height: number; size: number; isFocus?: boolean }>`
    display: block;
    text-align: center;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: ${({ height }) => height}px;
    font-size: ${({ size }) => size}px;
    color: ${({ isFocus }) => (isFocus ? '#9650FA' : 'black')};
`;
