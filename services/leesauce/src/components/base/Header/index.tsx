import styled from '@emotion/styled';
import { FC } from 'react';
import SearchInput from './SearchInput';
import Test from '../../../static/svg/magnifier_ico.svg';
import { DetailIco, LogoIco } from '../../../static/svg';

interface HeaderProps {}
const Header = (props: HeaderProps) => {
    return (
        <HeaderBlock>
            <Left>
                <LogoBlock>
                    <LogoIco />
                </LogoBlock>
                <SearchInput></SearchInput>
            </Left>
            <DetailIco />
        </HeaderBlock>
    );
};

export default Header;

const HeaderBlock = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
    padding: 0 32px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: ${({ theme }) => theme.colors.gray900};
`;

const Left = styled.div`
    display: flex;
`;

const LogoBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 32px;
`;
