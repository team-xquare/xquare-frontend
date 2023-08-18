import { PaletteType } from './Palette';
import { ThemeType } from './Theme';

export type ColorType = {
    Palette: PaletteType;
    lightTheme: ThemeType;
    darkTheme: ThemeType;
};
