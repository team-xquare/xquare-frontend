import { Icon } from '@/foundations/Icon';
import styled from '@emotion/styled';
import React from 'react';
import { Layout } from '../Button';
import { FloatingActionButtonProps } from './FloatingActionButton.types';

export const FloatingActionButton = React.forwardRef<HTMLButtonElement, FloatingActionButtonProps>(
    ({ icon, children, ...props }: FloatingActionButtonProps, ref) => {
        return (
            <FloatingActionButtonLayout ref={ref} {...props}>
                <Icon iconName={icon} size={24} color="tertiary100" />
                {children}
            </FloatingActionButtonLayout>
        );
    },
);

const FloatingActionButtonLayout = styled(Layout)<FloatingActionButtonProps>`
    color: ${({ theme }) => theme.color.lightTheme.OnTertiary};
    border-radius: ${({ theme }) => theme.corner.Small}px;
    background-color: ${({ theme }) => theme.color.lightTheme.Tertiary};
    box-shadow: 0 0 ${({ theme }) => theme.elevation.Low}px 0 rgba(0, 0, 0, 0.25);
    padding: 16px;
`;
