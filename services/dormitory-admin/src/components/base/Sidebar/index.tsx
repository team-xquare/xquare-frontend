import React from 'react';
import styled from 'styled-components';
import { colors } from '@semicolondsm/design-token';
import Logo from '../../common/Logo';
import Navigation from './Navigation';

const SidebarItems = [
    {
        title: "상벌점",
        uri: "/point",
    },
    {
        title: "공지사항",
        uri: "/notice",
    },
    {
        title: "잔류신청",
        uri: "/stay",
    },
    {
        title: "주말급식",
        uri: "/weekend",
    },
    {
        title: "다벌점봉사",
        uri: "/penalty",
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
    background: ${colors.light.scheme.gray300};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export default Sidebar;