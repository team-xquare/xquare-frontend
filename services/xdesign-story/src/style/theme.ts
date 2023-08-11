import {
    fontWeight,
    fontStyle,
    corner,
    elevation,
    FontWeightType,
    FontStyleType,
    CornerType,
    ElevationType,
} from '@/foundations';

interface ThemeType {
    fontWeight: FontWeightType;
    fontStyle: FontStyleType;
    corner: CornerType;
    elevation: ElevationType;
}

export const theme: ThemeType = {
    fontWeight,
    fontStyle,
    corner,
    elevation,
};
