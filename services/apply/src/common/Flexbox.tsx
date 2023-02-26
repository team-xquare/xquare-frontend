import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface FlexProps {
    gap?: number;
    align?: string;
    justify?: string;
    fullWidth?: boolean;
}

export const FlexRow = styled.div<FlexProps>`
    width: ${(props) => (props.fullWidth ? '100%' : 'initial')};
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${(props) => (props.gap ? props.gap : 0)}px;
    align-items: ${(props) => (props.align ? props.align : 'center')};
    justify-content: ${(props) => (props.justify ? props.justify : 'flex-start')};
`;

export const FlexCol = styled.div<FlexProps>`
    width: ${(props) => (props.fullWidth ? '100%' : 'initial')};
    display: flex;
    flex-direction: column;
    gap: ${(props) => (props.gap ? props.gap : 0)}px;
    align-items: ${(props) => (props.align ? props.align : 'flex-start')};
    justify-content: ${(props) => (props.justify ? props.justify : 'center')};
`;

export const flex = (props: FlexProps) => css`
    display: flex;
    width: ${props.fullWidth ? '100%' : 'initial'};
    gap: ${props.gap}px;
`;
