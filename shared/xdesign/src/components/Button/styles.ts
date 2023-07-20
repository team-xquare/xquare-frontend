import { css } from '@emotion/react';
import { ColorScheme } from '@semicolondsm/design-token';

export const full = () => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0;
`;

export const link = (props: any) => css`
    &:hover,
    &:active {
        text-decoration: underline 1px solid ${props.theme.colors[props.color]};
    }
`;
