import React from 'react';
import styled from 'styled-components';
import MainBoard from './MainBoard';
import MainList from './MainList';
import MainSchedule from './MainSchedule';
import MainTotal from './MainTotal';

const MainLayout = () => {
    return (
        <MainContainer>
            <MainTotal />
            <MainBoard />
            <MainList />
            <MainSchedule />
        </MainContainer>
    );
}

const MainContainer = styled.section`
    width: 100%;
    height: 100%;
    padding: 74px 60px 0 60px;
    display: grid;
    grid-template-columns: 1000px 1fr;
    grid-auto-rows: min-content 1fr;
    grid-gap: 44px;
`;

export default MainLayout;