import { ButtonProps } from '../Button.types';

export interface FloatingActionButtonProps extends Omit<ButtonProps, 'varient' | 'kind'> {}
