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
                <div>
                    
                </div>
                <MainListWrapper>
                    <MainListHaeder>호실</MainListHaeder>
                    <MainListHaeder>학번</MainListHaeder>
                    <MainListHaeder>이름</MainListHaeder>
                    <MainListHaeder>상점</MainListHaeder>
                    <MainListHaeder>벌점</MainListHaeder>
                    <MainListHaeder>봉사단계</MainListHaeder>
                    <MainListHaeder>잔류여부</MainListHaeder>
                    <MainListHaeder>주말급식</MainListHaeder>
                    {
                        data?.data.students.map(student => <MainListItem {...student} />)
                    }
                </MainListWrapper>
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
    min-height: 0;
    padding: 16px 20px;
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.colors.gray200};
`;

const MainListWrapper = styled.div`
    position: relative;
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: 50px;
    grid-template-columns: repeat(8, auto);
    align-items: center;
    justify-items: center;
    overflow-y: scroll;

    & p {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const MainListHaeder = styled(Body1)`
    top: 0;
    position: sticky;
    background: ${props => props.theme.colors.gray200};
`;

export default MainList;