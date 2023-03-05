import Link from 'next/link';
import React from 'react';
import styled from '@emotion/styled';
import { Logo as LogoSvg } from '../../static/svg';

const Logo = () => {
    return (
        <Link href="/">
            <LogoWrapper>
                <LogoSvgBorderRedius>
                    <LogoSvg />
                </LogoSvgBorderRedius>
                <LogoText>XQUARE</LogoText>
            </LogoWrapper>
        </Link>
    );
};

const LogoWrapper = styled.a`
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
`;

const LogoSvgBorderRedius = styled.div`
    width: 40px;
    height: 40px;
    overflow: hidden;
    border-radius: 5px;
    margin-top: 22px;
    & svg {
        transform: translateY(-32px);
    }
`;

const LogoText = styled.span`
    font-size: 24px;
    margin-left: 16px;
    position: relative;

    &::after {
        content: 'Admin';
        font-size: 18px;
        color: ${({ theme }) => theme.colors.gray500};
        position: absolute;
        top: 120%;
        left: 0;
        transform: translateY(-12px);
    }
`;

export default Logo;
