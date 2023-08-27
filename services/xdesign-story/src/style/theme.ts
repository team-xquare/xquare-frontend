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
import { darkTheme, lightTheme, ThemeType } from '@/foundations/Color/Theme';

export type ModeType = 'dark' | 'light';

export interface ThemeProviderType {
    color: ColorType;
    themeColor: ThemeType;
    fontWeight: FontWeightType;
    fontStyle: FontStyleType;
    corner: CornerType;
    elevation: ElevationType;
    mode: ModeType;
}

export const theme = (mode: ModeType): ThemeProviderType => ({
    mode,
    color,
    themeColor: mode == 'dark' ? darkTheme : lightTheme,
    fontWeight,
    fontStyle,
    corner,
    elevation,
});
