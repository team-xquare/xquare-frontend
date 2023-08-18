import { ThemeType } from './Theme.types';
import { Palette } from '../Palette/Palette';

export const theme: Readonly<ThemeType> = {
    light: {
        //primary
        Primary: Palette.primary60,
        OnPrimary: Palette.primary100,
        PrimaryContainer: Palette.primary90,
        OnPrimaryContainer: Palette.primary10,

        //secondary
        Secondary: Palette.secondary60,
        OnSecondary: Palette.secondary100,
        SecondaryContainer: Palette.secondary90,
        OnSecondaryContainer: Palette.secondary10,

        //Tertiary
        Tertiary: Palette.tertiary60,
        OnTertiary: Palette.tertiary100,
        TertiaryContainer: Palette.tertiary90,
        OnTertiaryContainer: Palette.tertiary10,

        //Error
        Error: Palette.error60,
        OnError: Palette.error100,
        ErrorContainer: Palette.error90,
        OnErrorContainer: Palette.error10,

        //Neutral
        Background: Palette.neutral99,
        OnBackground: Palette.neutral10,
        Surface: Palette.neutral100,
        OnSurface: Palette.neutral0,

        //Neutral_Variant
        SurfaceVariant: Palette.neutral_variant90,
        OnSurfaceVariant: Palette.neutral_variant30,
        Outline: Palette.neutral_variant50,
        OutlineVariant: Palette.neutral_variant80,
    },
    dark: {
        //primary
        Primary: Palette.primary40,
        OnPrimary: Palette.primary100,
        PrimaryContainer: Palette.primary30,
        OnPrimaryContainer: Palette.primary90,

        //secondary
        Secondary: Palette.secondary40,
        OnSecondary: Palette.secondary100,
        SecondaryContainer: Palette.secondary30,
        OnSecondaryContainer: Palette.secondary90,

        //Tertiary
        Tertiary: Palette.tertiary40,
        OnTertiary: Palette.tertiary100,
        TertiaryContainer: Palette.tertiary30,
        OnTertiaryContainer: Palette.tertiary90,

        //Error
        Error: Palette.error40,
        OnError: Palette.error100,
        ErrorContainer: Palette.error30,
        OnErrorContainer: Palette.error90,

        //Neutral
        Background: Palette.neutral10,
        OnBackground: Palette.neutral90,
        Surface: Palette.neutral0,
        OnSurface: Palette.neutral100,

        //Neutral_Variant
        SurfaceVariant: Palette.neutral_variant30,
        OnSurfaceVariant: Palette.neutral_variant80,
        Outline: Palette.neutral_variant60,
        OutlineVariant: Palette.neutral_variant30,
    },
};
