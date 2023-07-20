import { ColorScheme, FontTheme } from "@semicolondsm/design-token";

export type SDSTheme = {
    colors: ColorScheme
    fonts: FontTheme
}

declare module '@emotion/react' {
    export interface Theme extends SDSTheme {}
}