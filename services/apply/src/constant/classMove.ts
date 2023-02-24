export const floorList = ['1층', '2층', '3층', '4층', '5층'] as const;
export type FloorType = typeof floorList[number];
export const floorNumberSelector = {
    '1층': '1',
    '2층': '2',
    '3층': '3',
    '4층': '4',
    '5층': '5',
} as const;

export const ONE_SEC = 1000;
export const ONE_MIN = 60 * ONE_SEC;
export const ONE_HOUR = 60 * ONE_MIN;
export const ONE_DAY = 24 * ONE_HOUR;
