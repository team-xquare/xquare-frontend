import React from 'react';
import styled from '@emotion/styled';
import Navigation from './Navigation';
import Logo from '../../common/Logo';

const SidebarItems = [
    {
        title: "상벌점",
        uri: "/point",
    },
    {
        title: "공지사항",
        uri: "/notice",
    },
];

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Logo />
            <Navigation items={SidebarItems} />
        </SidebarContainer>
    );
}

const SidebarContainer = styled.nav`
    width: 260px;
    height: 100%;
    padding: 30px;
    background: ${props => props.theme.colors.gray300};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export default Sidebar;