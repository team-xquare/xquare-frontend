import React from 'react';
import dayjs from 'dayjs';
import useMealList from './useMealList';

const useTodayMeal = (date?: string) => {
    const getDate = dayjs(date);
    getDate.format();

    const year = getDate.get('year');
    const month = getDate.get('month') + 1;
    const TodayDate = getDate.format('YYYY-MM-DD');
    const { data: mealList } = useMealList(year, month);
    const TodyMeal = mealList?.meals.filter((item) => item.date === TodayDate)[0];
    return TodyMeal;
};

export default useTodayMeal;
