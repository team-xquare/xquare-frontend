import styled from '@emotion/styled';
import { FC } from 'react';
import Header from '../base/Header';
import SideBar from '../base/SideBar';

const MainPageTemplate: FC = ({ children }) => {
    return (
        <>
            <Header></Header>
            <SideBar></SideBar>
            <MainSection>{children}</MainSection>
        </>
    );
};

export default MainPageTemplate;

const MainSection = styled.div`
    margin: 0 auto;
    width: 840px;
    min-width: 840px;
    margin-top: 92px;
`;
