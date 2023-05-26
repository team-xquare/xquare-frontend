import dayjs from 'dayjs';
import 'dayjs/locale/ko';

export const formatTime = (date: string) => {
    const getDate = dayjs(date);
    return getDate.locale('ko').format('YYYY년 MM월 DD일 ddd요일');
};
