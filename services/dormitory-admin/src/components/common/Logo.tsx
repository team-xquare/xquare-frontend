import React from 'react';
import styled from 'styled-components';
import { Logo as LogoSvg } from '../../static/svg';
import { colors } from '@semicolondsm/design-token';
import Link from 'next/link';

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
}

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

    & svg {
        transform: translateY(-32px);
    }
`;

const LogoText = styled.span`
    font-size: 28px;
    letter-spacing: -1px;
    margin-left: 16px;
    position: relative;

    &::after {
        content: "Admin";
        font-size: 20px;
        color: #19B6B6;
        position: absolute;
        top: 100%;
        right: -10px;
        transform: translateY(-12px);
    }
`;

export default Logo;