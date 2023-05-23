import dayjs from 'dayjs';

export const formatTime = (date: string) => {
    const getDate = dayjs(date);
    const day = getDate.get('day');
    const DayOfTheWeek = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    const showTime = date.split('-');
    return `${showTime[0]}년 ${showTime[1]}월 ${showTime[2]}일 ${DayOfTheWeek[day]}`;
};
