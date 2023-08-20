import { ColorToken, PaletteType } from './Palette';
import { ThemeKeyType, ThemeType } from './Theme';

export type ColorType = {
    Palette: PaletteType;
    lightTheme: ThemeType;
    darkTheme: ThemeType;
};
