import React from 'react';
import styled from '@emotion/styled';
import { useModal } from '../../contexts/modal';
import MainBoard from './MainBoard';
import MainList from './MainList';
import MainSchedule from './MainSchedule';
import MainTotal from './MainTotal';
import ModalContainer from '../common/ModalContainer';

const MainLayout = () => {
    const { modalRef } = useModal();

    return (
        <MainContainer>
            <ModalContainer ref={modalRef}>
                
            </ModalContainer>
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
    grid-template-columns: 1000px minmax(0, 1fr);
    grid-auto-rows: min-content minmax(0, 1fr);
    grid-gap: 44px;
`;

export default MainLayout;