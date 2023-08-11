import { OnClickProps, StandardAttrProps } from '@/types/ComponentsProps';

export interface FlexProps extends StandardAttrProps, OnClickProps {
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
