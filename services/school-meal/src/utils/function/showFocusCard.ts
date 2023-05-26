import dayjs from 'dayjs';

type mealTimeType = '아침' | '점심' | '저녁';

const showFocusCard = (mealTime: mealTimeType, todayDate: string) => {
    const currentDate = dayjs();
    const hour = currentDate.get('hour');
    let onFocus = false;
    console.log(hour);
    switch (mealTime) {
        case '아침': {
            onFocus = 0 < hour && hour < 9;
            break;
        }
        case '점심': {
            onFocus = 9 <= hour && hour < 16;
            break;
        }
        case '저녁': {
            onFocus = 16 <= hour && hour < 24;
            break;
        }
    }
    return onFocus && todayDate === currentDate.format('YYYY-MM-DD');
};

export default showFocusCard;
