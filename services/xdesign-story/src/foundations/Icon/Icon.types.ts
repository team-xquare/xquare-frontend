import { HTMLAttributes } from 'react';
import { ColorToken } from '../Color/Palette';
import { ThemeKeyType } from '../Color/Theme';
import { IconName } from './assets';

export interface IconProps extends HTMLAttributes<SVGElement> {
    iconName?: IconName;
    color?: ColorToken | ThemeKeyType;
    size?: number;
}

export interface SvgProps extends Omit<IconProps, 'name'> {}
