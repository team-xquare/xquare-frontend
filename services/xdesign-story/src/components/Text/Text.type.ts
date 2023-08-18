import { TypoGraphyType, FontSizeKeyType } from '@/foundations';
import { HTMLAttributes } from 'react';

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
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
