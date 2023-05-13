export const weeks = ['일', '월', '화', '수', '목', '금', '토'] as const;
export const weeksType = ['SUN', 'MON', 'TUS', 'WEN', 'TUR', 'FRI', 'SAT'];
export const ONE_SECOND = 1000;
export const ONE_MINUTE = 60 * ONE_SECOND;
export const ONE_HOUR = 60 * ONE_MINUTE;
export const ONE_DAY = 24 * ONE_HOUR;
export const timeUnit = ['hour', 'minute', 'second'] as const;

export const weeksMap = {
    SUN: '일',
    MON: '월',
    TUS: '화',
    WEN: '수',
    TUR: '목',
    FRI: '금',
    SAT: '토',
};
