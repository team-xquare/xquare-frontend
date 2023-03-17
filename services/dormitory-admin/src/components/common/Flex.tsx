import { HTMLAttributes } from 'react';
import styled from '@emotion/styled';

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
    direction?: 'row' | 'column';
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
    align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    flex?: string;
    grow?: number;
    gap?: number;
    rowGap?: number;
    columnGap?: number;
    shrink?: number;
    basis?: string;
    order?: number;
    alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
    padding?: string | number;
    margin?: string | number;
    fullWidth?: boolean;
    fullHeight?: boolean;
}

export const Flex = styled.div<FlexProps>`
    display: flex;

    flex-direction: ${(props) => props.direction || 'row'};
    justify-content: ${(props) => props.justify || 'flex-start'};
    align-items: ${(props) => props.align || 'stretch'};
    flex-wrap: ${(props) => props.wrap || 'nowrap'};
    flex: ${(props) => props.flex || 'none'};
    flex-grow: ${(props) => props.grow || 0};
    flex-shrink: ${(props) => props.shrink || 1};
    gap: ${(props) => props.gap || 0}px;
    row-gap: ${(props) => (props.gap ? `${props.rowGap}px` : 'unset')};
    column-gap: ${(props) => (props.gap ? `${props.columnGap}px` : 'unset')};

    flex-basis: ${(props) => props.basis || 'auto'};
    order: ${(props) => props.order || 0};
    align-self: ${(props) => props.alignSelf || 'auto'};
    padding: ${(props) => props.padding || 0};
    margin: ${(props) => props.margin || 0};

    width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
    height: ${(props) => (props.fullHeight ? '100%' : 'auto')};
`;
