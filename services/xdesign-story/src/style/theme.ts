import {
    fontWeight,
    fontStyle,
    corner,
    elevation,
    FontWeightType,
    FontStyleType,
    CornerType,
    ElevationType,
    color,
    ColorType,
} from '@/foundations';

interface ThemeType {
    color: ColorType;
    fontWeight: FontWeightType;
    fontStyle: FontStyleType;
    corner: CornerType;
    elevation: ElevationType;
}

export const theme: ThemeType = {
    color,
    fontWeight,
    fontStyle,
    corner,
    elevation,
};
