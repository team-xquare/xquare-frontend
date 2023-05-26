import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import LeftButton from '../assets/LeftButton.svg';
import RightButton from '../assets/RightButton.svg';
import styled from '@emotion/styled';
import MealCard from '../main/components/MealCard';
import useTodayMeal from '../main/hook/useTodayMeal';
import { formatTime } from '../utils/function/formatTime';
import useDate from '../main/hook/useSetDate';

const Home: NextPage = () => {
    const { currentDate, onNextClick, onPrevClick } = useDate();
    const TodayMeal = useTodayMeal(currentDate.format());
    const formatedDate = currentDate.format('YYYY-MM-DD');
    return (
        <Container>
            <Text size={50} weight={600}>
                오늘의 메뉴
            </Text>
            <Text size={25} weight={500}>
                {formatTime(formatedDate)}
            </Text>
            <MealCardWrapper>
                <SlideButton onClick={() => onPrevClick()}>
                    <Image src={LeftButton} alt="LeftButton" width={24} height={48} />
                </SlideButton>
                <MealCard
                    mealTime="아침"
                    mealList={TodayMeal?.breakfast}
                    mealKcal={TodayMeal?.breakfast_kcal}
                    todayDate={formatedDate}
                />
                <MealCard
                    mealTime="점심"
                    mealList={TodayMeal?.lunch}
                    mealKcal={TodayMeal?.lunch_kcal}
                    todayDate={formatedDate}
                />
                <MealCard
                    mealTime="저녁"
                    mealList={TodayMeal?.dinner}
                    mealKcal={TodayMeal?.dinner_kcal}
                    todayDate={formatedDate}
                />
                <SlideButton onClick={() => onNextClick()}>
                    <Image src={RightButton} alt="RightButton" width={24} height={48} />
                </SlideButton>
            </MealCardWrapper>
        </Container>
    );
};

export default Home;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    gap: 20px;
`;

const Text = styled.span<{ size: number; weight: number }>`
    font-size: ${({ size }) => size}px;
    font-weight: ${({ weight }) => weight};
`;

const MealCardWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1200px;
    height: 500px;
`;

const SlideButton = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    background-color: white;
    border: 0px;
    border-radius: 75px;
    opacity: 0.7;
    &:hover {
        opacity: 1;
    }
    &:active {
        transform: translateY(5px);
    }
`;
