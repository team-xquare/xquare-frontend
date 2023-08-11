import { FontWeightKeyType, FontWeightType } from './FontWeight.types';

export const fontWeight: FontWeightType = {
    bold: 700,
    medium: 500,
    regular: 400,
};

export const fontWeightList: [FontWeightKeyType, number][] = Object.entries(fontWeight) as [
    FontWeightKeyType,
    number,
][];
