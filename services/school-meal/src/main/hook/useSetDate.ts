import React, { useState } from 'react';
import dayjs from 'dayjs';

const useDate = () => {
    const [currentDate, setCurrentDate] = useState(dayjs());
    const onPrevClick = () => {
        setCurrentDate((prev) => prev.subtract(1, 'day'));
    };
    const onNextClick = () => {
        setCurrentDate((prev) => prev.add(1, 'day'));
    };
    return { currentDate, onPrevClick, onNextClick };
};

export default useDate;
