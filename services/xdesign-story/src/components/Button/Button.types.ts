import { IconName } from '@/foundations/Icon/assets';
import { ChildrenProps } from '@/types/ComponentsProps';
import { ButtonHTMLAttributes } from 'react';

export type ButtonVarientType = 'primary' | 'secondary' | 'tertiary';

export type ButtonKindType = 'filled' | 'outlined' | 'text';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ChildrenProps {
    varient?: ButtonVarientType;
    kind?: ButtonKindType;
    icon?: IconName;
}
