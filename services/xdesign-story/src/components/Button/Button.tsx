import React from 'react';
import { ColorToken, Palette } from '@/foundations/Color/Palette';
import { Icon } from '@/foundations/Icon';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ButtonVarientType, ButtonKindType, ButtonProps } from './Button.types';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ varient, kind, icon, children, ...props }, ref) => {
        return (
            <Layout ref={ref} varient={varient} kind={kind} {...props}>
                {children}
                <Icon iconName={icon} size={24} color={iconColor(kind, varient)} />
            </Layout>
        );
    },
);

export const Layout = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    text-align: center;
    gap: 8px;
    outline: none;
    border: 0 solid transparent;
    border-radius: 12px;
    padding: 12px 16px;
    ${({ theme }) => theme.fontStyle.Body.Large};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    ${({ kind = 'filled', varient = 'primary' }) => kindVarient(kind, varient)};
    cursor: pointer;
    &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }
`;

const kindVarient = (kind: ButtonKindType, varient: ButtonVarientType) => {
    switch (kind) {
        case 'filled':
            return css`
                color: ${Palette[`${varient}100` as ColorToken]};
                background-color: ${Palette[`${varient}60` as ColorToken]};
                &:active {
                    opacity: 0.9;
                }
            `;
        case 'outlined':
            return css`
                color: ${Palette[`${varient}60` as ColorToken]};
                background-color: ${Palette[`${varient}100` as ColorToken]};
                border: 1px solid ${Palette[`${varient}90` as ColorToken]};
                &:active {
                    background-color: ${Palette[`${varient}90` as ColorToken]};
                }
            `;
        case 'text':
            return css`
                color: ${Palette[`${varient}0` as ColorToken]};
                background-color: transparent;
                &:active {
                    background-color: ${Palette[`${varient}90` as ColorToken]};
                }
            `;
    }
};

const iconColor = (
    kind: ButtonKindType = 'filled',
    varient: ButtonVarientType = 'primary',
): ColorToken => {
    switch (kind) {
        case 'filled':
            return `${varient}100`;
        case 'outlined':
            return `${varient}60`;
        case 'text':
            return `${varient}0`;
        default:
            return `${varient}100`;
    }
};
