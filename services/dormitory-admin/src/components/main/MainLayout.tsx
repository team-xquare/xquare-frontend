import React from 'react';
import styled from '@emotion/styled';
import { useModal } from '../../contexts/modal';
import MainBoard from './MainBoard';
import MainList from './MainList';
import MainSchedule from './MainSchedule';
import MainTotal from './MainTotal';
import ModalContainer from '../common/ModalContainer';
import { SortProvider } from '../../contexts/sort';

const MainLayout = () => {
    return (
        <SortProvider>
            <MainContainer>
                <ModalContainer>
                    
                </ModalContainer>
                <MainTotal />
                <MainBoard />
                <MainList />
                <MainSchedule />
            </MainContainer>
        </SortProvider>
    );
}

const MainContainer = styled.section`
    width: 100%;
    height: 100%;
    padding: 74px 60px 0 60px;
    display: grid;
    grid-template-columns: minmax(700px, 1000px) minmax(400px, 1fr);
    grid-auto-rows: min-content minmax(600px, 1fr);
    grid-gap: 44px;
    overflow-x: auto;
`;

export default MainLayout;