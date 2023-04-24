const date = new Date();

export const weeks = ['일', '월', '화', '수', '목', '금', '토'] as const;
export const ONE_HOUR = 60;
export const day = date.getDay();
export const hour = date.getHours();
export const minute = date.getMinutes();
export const ms = date.getMilliseconds() / 1000;
