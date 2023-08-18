import { fontWeight } from '../FontWeight/FontWeight';
import { css } from '@emotion/react';
import { FontWeightKeyType } from '../FontWeight/FontWeight.types';
import { FontStyleType, TypoGraphyType } from './FontStyle.types';

const fontGenerator = (fontSize: number, lineHeight: number, weight: FontWeightKeyType) =>
    css`
        font-size: ${fontSize}px;
        line-height: ${lineHeight}px;
        font-weight: ${fontWeight[weight]};
    `;

export const fontStyle: FontStyleType = {
    Display: {
        Large: fontGenerator(57, 64, 'bold'),
        Medium: fontGenerator(45, 52, 'bold'),
        Small: fontGenerator(36, 44, 'bold'),
    },
    HeadLine: {
        Large: fontGenerator(32, 40, 'bold'),
        Medium: fontGenerator(28, 36, 'bold'),
        Small: fontGenerator(24, 32, 'bold'),
    },
    Title: {
        Large: fontGenerator(22, 28, 'regular'),
        Medium: fontGenerator(16, 24, 'medium'),
        Small: fontGenerator(14, 20, 'medium'),
    },
    Label: {
        Large: fontGenerator(14, 20, 'medium'),
        Medium: fontGenerator(12, 16, 'medium'),
        Small: fontGenerator(11, 16, 'medium'),
    },
    Body: {
        Large: fontGenerator(16, 24, 'regular'),
        Medium: fontGenerator(14, 20, 'regular'),
        Small: fontGenerator(12, 16, 'regular'),
    },
};

export const fontStyleList: TypoGraphyType[] = Object.keys(fontStyle) as TypoGraphyType[];
