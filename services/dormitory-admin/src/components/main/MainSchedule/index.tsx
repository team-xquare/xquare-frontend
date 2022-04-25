import React from 'react';
import styled from '@emotion/styled';
import MainSectionTitle from '../MainSectionTitle';
import MainScheduleItem from './MainScheduleItem';

const MainSchedule = () => {
    return (
        <MainContainer>
            <MainSectionTitle>최신 일정</MainSectionTitle>
            <MainScheduleListWrapper>
                <MainScheduleItem />
            </MainScheduleListWrapper>
        </MainContainer>
    );
}

const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const MainScheduleListWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 94px;
    grid-gap: 14px;
`;

export default MainSchedule;