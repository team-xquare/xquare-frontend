const weeks = {
    '0': '일',
    '1': '월',
    '2': '화',
    '3': '수',
    '4': '목',
    '5': '금',
    '6': '토',
} as const;

type weeks = (typeof weeks)[keyof typeof weeks];

const date = new Date();

export const useOnWeek = (week: weeks[]) => {
    const day = date.getDay().toString();

    const onDay = week.includes(weeks[day as keyof typeof weeks]);
    return onDay;
};

export const useOnTime = (startTime: number[], endTime: number[]) => {
    const ONE_HOUR = 60;
    const hour = date.getHours();
    const minute = date.getMinutes();

    const current = ONE_HOUR * hour + minute;
    const start = ONE_HOUR * startTime[0] + startTime[1];
    const end = ONE_HOUR * endTime[0] + endTime[1];

    if (start <= end) {
        return current >= start && current <= end;
    } else {
        return current >= start || current <= end;
    }
};
