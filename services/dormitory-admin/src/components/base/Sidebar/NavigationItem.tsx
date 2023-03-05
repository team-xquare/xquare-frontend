import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { Body2 } from '@semicolondsm/ui';
import { ColorToken } from '@semicolondsm/design-token';
import { css } from '@emotion/react';

interface PropsType {
    isActive: boolean;
    uri: string;
    title: string;
}

const NavigationItem = ({ isActive, uri, title }: PropsType) => {
    return (
        <Link href={uri}>
            <Item isActive={isActive}>
                <Body2
                    fontWeight={isActive ? 'medium' : 'regular'}
                    color={'currentColor' as ColorToken}>
                    {title}
                </Body2>
            </Item>
        </Link>
    );
};

const Item = styled.a<{ isActive: boolean }>`
    width: 100%;
    color: ${({ theme, isActive }) => (isActive ? theme.colors.white : theme.colors.black)};
    text-decoration: none;
    padding: 10px 12px;
    border-radius: 4px;
    background: ${({ isActive, theme }) => (isActive ? theme.colors.purple400 : 'transparent')};
    transition: background 0.05s linear;
    cursor: pointer;
    user-select: none;

    ${({ isActive, theme }) =>
        !isActive &&
        css`
            &:hover {
                background: ${theme.colors.gray100};
            }
        `}
`;

export default NavigationItem;
