import { ms, minute, hour, day, ONE_HOUR, weeks } from '../../constant/useApplyItem';

export type WeekType = (typeof weeks)[number];

export const useOnWeek = (week: WeekType[]) => {
    const onDay = week.includes(weeks[day]);
    return onDay;
};

export const useOnTime = (startTime: [number, number], endTime: [number, number]) => {
    const current = ONE_HOUR * hour + minute + ms;
    const start = ONE_HOUR * startTime[0] + startTime[1];
    const end = ONE_HOUR * endTime[0] + endTime[1];

    if (start <= end) {
        return current >= start && current <= end;
    } else {
        return current >= start || current <= end;
    }
};
