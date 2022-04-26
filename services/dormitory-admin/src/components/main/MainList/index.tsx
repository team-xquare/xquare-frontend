import React from 'react';
import styled from '@emotion/styled';
import MainSectionTitle from '../MainSectionTitle';
import MainListItem from './MainListItem';
import { usePoints } from '../../../apis/points';
import { Body1 } from '@semicolondsm/ui';

const MainList = () => {
    const { data, isLoading, error } = usePoints();

    return (
        <MainContainer>
            <MainSectionTitle>학생 목록</MainSectionTitle>
            <MainBlock>
                <Body1>호실</Body1>
                <Body1>학번</Body1>
                <Body1>이름</Body1>
                <Body1>상점</Body1>
                <Body1>벌점</Body1>
                <Body1>봉사단계</Body1>
                <Body1>잔류여부</Body1>
                <Body1>주말급식</Body1>
                <Body1>상벌점 부여</Body1>
                {
                    data?.data.students.map(student => <MainListItem {...student} />)
                }
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
    overflow-y: scroll;
`;

export default MainList;