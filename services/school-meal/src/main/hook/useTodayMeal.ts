import React from 'react';
import dayjs from 'dayjs';
import useMealList from './useMealList';

const useTodayMeal = (date?: string) => {
    const getDate = dayjs(date);

    const year = getDate.get('year');
    const month = getDate.get('month') + 1;
    const todayDate = getDate.format('YYYY-MM-DD');
    const { data: mealList } = useMealList(year, month);
    const todyMeal = mealList?.meals.find((item) => item.date === todayDate);
    return todyMeal;
};

export default useTodayMeal;
