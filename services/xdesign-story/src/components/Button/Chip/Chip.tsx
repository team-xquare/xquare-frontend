import { ColorToken } from '@/foundations/Color/Palette';
import { ThemeKeyType, ThemeType } from '@/foundations/Color/Theme';
import { Icon } from '@/foundations/Icon';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { Layout } from '../Button';
import { ChipKindType, ChipProps } from './Chip.types';

export const Chip = React.forwardRef<HTMLButtonElement, ChipProps>(
    ({ kind = 'filled', leftIcon, rightIcon, children, ...props }, ref) => {
        return (
            <ChipLayout kind={kind} ref={ref} {...props}>
                <Icon iconName={leftIcon} size={16} color={iconColor(kind)} />
                {children}
                <Icon iconName={rightIcon} size={16} color={iconColor(kind)} />
            </ChipLayout>
        );
    },
);

const ChipLayout = styled(Layout)<ChipProps>`
    padding: 4px;
    gap: 4px;
    border-radius: 4px;
    ${({ theme }) => theme.fontStyle.Label.Medium};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    ${({ kind = 'filled', theme }) => kindVarient(kind, theme.themeColor)}
`;

const kindVarient = (kind: ChipKindType, themeColor: ThemeType) => {
    switch (kind) {
        case 'filled':
            return css`
                color: ${themeColor.OnSecondary};
                background: ${themeColor.Secondary};
            `;
        case 'outlined':
            return css`
                color: ${themeColor.Secondary};
                background-color: ${themeColor.OnSecondary};
                border: 1px solid ${themeColor.Secondary};
                &:active {
                    color: ${themeColor.Secondary};
                    background-color: ${themeColor.SecondaryContainer};
                }
            `;
    }
};

const iconColor = (kind: ChipKindType): ColorToken | ThemeKeyType => {
    switch (kind) {
        case 'filled':
            return `OnSecondary`;
        case 'outlined':
            return `Secondary`;
        default:
            return `OnSecondary`;
    }
};
