import dayjs from 'dayjs';

const dateFormat = (date: dayjs.Dayjs = dayjs()) => {
    return date.format('YYYY-MM-DD');
};

export default dateFormat;
