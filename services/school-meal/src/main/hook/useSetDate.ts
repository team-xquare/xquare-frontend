import React, { useState } from 'react';
import dayjs from 'dayjs';

const useDate = () => {
    const date = dayjs();
    date.format();
    const [number, setNumber] = useState(0);
    const onPrevClick = () => {
        setNumber((prev) => prev - 1);
    };
    const onNextClick = () => {
        setNumber((prev) => prev + 1);
    };
    const currentDate = date.add(number, 'day');
    return { currentDate, onPrevClick, onNextClick };
};

export default useDate;
