import { HTMLAttributes } from 'react';

export interface FlexProps extends HTMLAttributes<HTMLElement> {
    gap?: number;
    align?:
        | 'center'
        | 'flex-start'
        | 'flex-end'
        | 'space-between'
        | 'space-around'
        | 'space-evenly'
        | 'stretch';
    justify?:
        | 'center'
        | 'flex-start'
        | 'flex-end'
        | 'space-between'
        | 'space-around'
        | 'space-evenly';
    fullWidth?: boolean;
}
