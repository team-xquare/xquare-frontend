import React from 'react';
import styled from '@emotion/styled';
import MainSectionTitle from '../MainSectionTitle';
import MainListItem from './MainListItem';

const MainList = () => {
    return (
        <MainContainer>
            <MainSectionTitle>학생 목록</MainSectionTitle>
            <MainBlock>
                <MainListItem isHeader />
                <MainListItem />
            </MainBlock>
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

const MainBlock = styled.div`
    width: 100%;
    height: 100%;
    padding: 16px 20px;
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: 50px;
    grid-template-columns: repeat(9, auto);
    align-items: center;
    justify-items: center;
    background: ${props => props.theme.colors.gray200};
`;

export default MainList;