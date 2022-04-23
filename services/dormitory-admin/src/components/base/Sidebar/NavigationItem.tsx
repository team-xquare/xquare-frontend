import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { colors } from '@semicolondsm/design-token';

interface PropsType {
    isActive: boolean;
    uri: string;
    title: string;
}

const NavigationItem = ({
    isActive,
    uri,
    title,
}: PropsType) => {
    return (
        <Link href={uri}>
            <Item isActive={isActive}>{title}</Item>
        </Link>
    );
}

const Item = styled.a<{ isActive: boolean; }>`
    width: 100%;
    font-size: 18px;
    color: ${colors.light.scheme.black};
    text-decoration: none;
    border-radius: 10px;
    padding: 10px 12px;
    background: ${({ isActive }) => isActive ? colors.light.scheme.gray400 : "transparent"};
    transition: background .07s linear;
    cursor: pointer;
    user-select: none;

    &:hover {
        background: ${colors.light.scheme.gray400};
    }
`;

export default NavigationItem;