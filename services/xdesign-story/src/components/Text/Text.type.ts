import { TypoGraphyType, FontSizeKeyType } from '@/foundations';
import type { ChildrenProps, OnClickProps, StandardAttrProps } from '@/types/ComponentsProps';

export interface TextProps extends ChildrenProps, StandardAttrProps {
    align?: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent' | 'inherit';
    typograghy?: TypoGraphyType;
    size?: FontSizeKeyType;
    // color?: ;
    whiteSpace?: 'normal' | 'pre' | 'nowrap' | 'pre-wrap' | 'pre-line' | 'break-spaces' | 'inherit';
    underline?: boolean;
    htmlFor?: string;
    userSelect?: 'auto' | 'text' | 'none' | 'contain' | 'all';
    textOverflow?:
        | 'clip'
        | 'ellipsis'
        | 'inherit'
        | 'initial'
        | 'revert'
        | 'revert-layer'
        | 'unset';
}
