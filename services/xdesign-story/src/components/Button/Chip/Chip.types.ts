import { IconName } from '@/foundations/Icon/assets';
import { ButtonKindType, ButtonProps } from '../Button.types';

export type ChipKindType = Exclude<ButtonKindType, 'text'>;

export interface ChipProps extends Omit<ButtonProps, 'varient' | 'icon'> {
    kind?: ChipKindType;
    leftIcon?: IconName;
    rightIcon?: IconName;
}
