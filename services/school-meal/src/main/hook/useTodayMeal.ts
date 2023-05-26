import React from 'react';
import dayjs from 'dayjs';
import useMealList from './useMealList';

const useTodayMeal = (date?: string) => {
    const getDate = dayjs(date);

    const year = getDate.get('year');
    const month = getDate.get('month') + 1;
    const TodayDate = getDate.format('YYYY-MM-DD');
    const { data: mealList } = useMealList(year, month);
    const TodyMeal = mealList?.meals.find((item) => item.date === TodayDate);
    return TodyMeal;
};

export default useTodayMeal;
