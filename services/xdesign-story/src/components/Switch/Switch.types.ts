import { HTMLAttributes } from 'react';

export interface SwitchProps extends HTMLAttributes<HTMLElement> {
    isOn: boolean;
    onClick: () => void;
    isActive: boolean;
}
