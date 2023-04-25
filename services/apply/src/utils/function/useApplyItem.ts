import { ONE_SECOND, ONE_MINUTE, ONE_DAY, ONE_HOUR, weeks } from '../../constant/time';

export type WeekType = (typeof weeks)[number];
export type WeekTypes = WeekType[] | '매일';

const date = new Date();
const second = date.getSeconds();
const minute = date.getMinutes();
const hour = date.getHours();
const day = date.getDay();

export const isWithinDayRange = (week: WeekTypes) => {
    if (week === '매일') {
        return true;
    }
    const onDay = week && week.includes(weeks[day]);
    return onDay;
};

export const isWithinTimeRange = (startTime: [number, number], endTime: [number, number]) => {
    const current = hour * ONE_HOUR + minute * ONE_MINUTE + second * ONE_SECOND;
    const start = ONE_HOUR * startTime[0] + startTime[1] * ONE_MINUTE;
    const end = ONE_HOUR * endTime[0] + endTime[1] * ONE_MINUTE;

    if (start <= end) {
        return current >= start && current <= end;
    } else {
        return current >= start || current <= end;
    }
};
