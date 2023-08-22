import { ColorToken } from '@/foundations/Color/Palette';
import { lightTheme } from '@/foundations/Color/Theme';
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
    ${({ kind = 'filled' }) => kindVarient(kind)}
`;

const kindVarient = (kind: ChipKindType) => {
    switch (kind) {
        case 'filled':
            return css`
                color: ${lightTheme.OnSecondary};
                background: ${lightTheme.Secondary};
            `;
        case 'outlined':
            return css`
                color: ${lightTheme.Secondary};
                background-color: ${lightTheme.OnSecondary};
                border: 1px solid ${lightTheme.Secondary};
                &:active {
                    color: ${lightTheme.Secondary};
                    background-color: ${lightTheme.SecondaryContainer};
                }
            `;
    }
};

const iconColor = (kind: ChipKindType): ColorToken => {
    switch (kind) {
        case 'filled':
            return `secondary100`;
        case 'outlined':
            return `secondary60`;
        default:
            return `secondary100`;
    }
};
