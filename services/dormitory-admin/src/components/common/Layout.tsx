import React from 'react';
import styled from '@emotion/styled';
import Sidebar from '../base/Sidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <LayoutWrapper>
            <Sidebar />
            <ContentBox>{children}</ContentBox>
        </LayoutWrapper>
    );
};

const LayoutWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
`;

const ContentBox = styled.div`
    flex: 1;
    height: 100%;
`;

export default Layout;
