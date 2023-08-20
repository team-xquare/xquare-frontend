import { HTMLAttributes } from 'react';
import { ColorToken } from '../Color/Palette';
import { IconName } from './assets';

export interface IconProps extends HTMLAttributes<SVGElement> {
    iconName?: IconName;
    color?: ColorToken;
    size?: number;
}

export interface SvgProps extends Omit<IconProps, 'name'> {}
