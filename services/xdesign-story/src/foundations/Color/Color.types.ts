const knownColorGroupNames = [
    'primary',
    'secondary',
    'tertiary',
    'error',
    'neutral',
    'neutral_variant',
] as const;

export type KnownColorGroup = (typeof knownColorGroupNames)[number];
type MakeTokenSet<
    TGroup extends KnownColorGroup,
    TLightness extends number[],
> = `${TGroup}${TLightness[number]}`;

export type ColorToken =
    | 'white'
    | 'black'
    | MakeTokenSet<'primary', [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100]>
    | MakeTokenSet<'secondary', [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100]>
    | MakeTokenSet<'tertiary', [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100]>
    | MakeTokenSet<'error', [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100]>
    | MakeTokenSet<'neutral', [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100]>
    | MakeTokenSet<'neutral_variant', [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100]>;
export type ColorScheme = Record<ColorToken, string>;

export type ColorTheme = {
    scheme: ColorScheme;
};
