import React from 'react';
import styled from '@emotion/styled';
import Navigation from './Navigation';
import Logo from '../../common/Logo';

const SidebarItems = [
    {
        title: '상벌점',
        uri: '/point',
    },
    {
        title: '공지사항',
        uri: '/notice',
    },
    {
        title: '잔류신청',
        uri: '/stay',
    },
    {
        title: '주말외출',
        uri: '/weekend-out',
    },
    {
        title: '주말급식',
        uri: '/weekend-meal',
    },
];

const Sidebar = () => {
    return (
        <SidebarContainer id="sidebar">
            <Logo />
            <Navigation items={SidebarItems} />
        </SidebarContainer>
    );
};

const SidebarContainer = styled.nav`
    width: 260px;
    height: 100%;
    padding: 30px;
    border-right: 1px solid ${(props) => props.theme.colors.gray100};

    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export default Sidebar;
