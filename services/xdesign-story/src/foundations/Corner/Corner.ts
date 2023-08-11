import { CornerKeyType, CornerType } from './Corner.types';

export const corner: CornerType = {
    xSmall: 8,
    Small: 16,
    Medium: 24,
    Large: 32,
    xLarge: 40,
};

export const cornerList: [CornerKeyType, number][] = Object.entries(corner) as [
    CornerKeyType,
    number,
][];
