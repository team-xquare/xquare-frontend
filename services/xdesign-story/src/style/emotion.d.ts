import { ThemeType } from '@/foundations/Color/Theme';
import '@emotion/react';
import { ModeType, theme, ThemeProviderType } from './theme';

declare module '@emotion/react' {
    export interface Theme extends ThemeProviderType {}
}
