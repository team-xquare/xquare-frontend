import React from 'react';
import styled from '@emotion/styled';
import { Body1, Subtitle4 } from '@semicolondsm/ui';
import MainSectionTitle from '../common/MainSectionTitle';

const MainTotal = () => {
    return (
        <MainContainer>
            <MainSectionTitle>요약</MainSectionTitle>
            <MainBlock>
                <MainColumn>
                    <Body1>전체 학생 수</Body1>
                    <Subtitle4>220</Subtitle4>
                </MainColumn>
                <MainColumn>
                    <Body1>오늘 학생 수</Body1>
                    <Subtitle4>218</Subtitle4>
                </MainColumn>
                <MainColumn>
                    <Body1>이번 주 잔류</Body1>
                    <Subtitle4>92</Subtitle4>
                </MainColumn>
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
    padding: 16px 20px 16px 40px;
    display: flex;
    background: ${props => props.theme.colors.gray200};
`;

const MainColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-right: 70px;
`;

export default MainTotal;