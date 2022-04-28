import React from 'react';
import styled from '@emotion/styled';
import { Body1 } from '@semicolondsm/ui';
import PointListItem from './PointListItem';
import MainSectionTitle from '../../common/MainSectionTitle';
import { usePoints } from '../../../apis/points';

interface PropsType {
    onClick: (id: string) => void;
    id?: string;
}

const PointList = ({
    onClick,
    id,
}: PropsType) => {
    const { data, isLoading, error } = usePoints();

    return (
        <MainContainer>
            <MainSectionTitle>학생 리스트</MainSectionTitle>
            <MainBlock>
                <MainListWrapper>
                    <MainListHaeder>호실</MainListHaeder>
                    <MainListHaeder>학번</MainListHaeder>
                    <MainListHaeder>이름</MainListHaeder>
                    <MainListHaeder>상점</MainListHaeder>
                    <MainListHaeder>벌점</MainListHaeder>
                    <MainListHaeder>1단계</MainListHaeder>
                    <MainListHaeder>2단계</MainListHaeder>
                    <MainListHaeder>3단계</MainListHaeder>
                    <MainListHaeder>1Out</MainListHaeder>
                    <MainListHaeder>2Out</MainListHaeder>
                    {
                        data?.data.students.map(student => (
                            <PointListItem 
                                isActive={student.id === id} 
                                key={student.id} 
                                onClick={onClick} 
                                {...student} 
                            />
                        ))
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
    background: ${props => props.theme.colors.gray200};
`;

const MainListWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: 50px;
    grid-template-columns: repeat(10, auto);
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

export default PointList;