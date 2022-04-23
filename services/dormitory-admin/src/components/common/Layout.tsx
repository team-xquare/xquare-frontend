import React from 'react';
import styled from 'styled-components';
import Sidebar from '../base/Sidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <GridLayout>
            <Sidebar />
            {children}
        </GridLayout>
    );
}

const GridLayout = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-template-rows: 1fr;
`;

export default Layout;