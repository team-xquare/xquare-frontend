import React from 'react';
import styled from '@emotion/styled';
import MainSectionTitle from '../../common/MainSectionTitle';
import MainListItem from './MainListItem';
import { usePointQuery } from '../../../apis/points';
import StudentList from '../../common/StudentList';
import { useSort } from '../../../contexts/sort';
import { sortedStudents } from '../../../libs/utils';

const columns = ["학번", "이름", "상점", "벌점", "봉사단계", "잔류여부", "주말급식"];

const MainList = () => {
    const { data } = usePointQuery();
    const { sortType } = useSort();

    return (
        <MainContainer>
            <MainSectionTitle>학생 목록</MainSectionTitle>
            <StudentList columns={columns}>
                {sortedStudents(sortType, data).map(student => <MainListItem key={student.id} {...student} />)}
            </StudentList>
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
export default MainList;