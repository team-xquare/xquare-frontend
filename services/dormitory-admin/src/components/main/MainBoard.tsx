import React from 'react';
import styled from '@emotion/styled';
import { Body1 } from '@semicolondsm/ui';
import MainSectionTitle from '../common/MainSectionTitle';

const MainBoard = () => {
    return (
        <MainContainer>
            <MainSectionTitle>명단</MainSectionTitle>
            <MainBlock>
                <MainLine>
                    <Circle />
                    <Body1>정환</Body1>
                    <Body1>2022.04.22 ~ 2022.04.30</Body1>
                </MainLine>
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
    height: 100px;
    padding: 16px 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: ${props => props.theme.colors.gray200};
`;

const MainLine = styled.div`
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    grid-template-rows: 1fr;
    grid-gap: 10px;
    align-items: center;
`;

const Circle = styled.div`
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: ${props => props.theme.colors.gray400};
`;

export default MainBoard;