import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import PointListItem from './PointListItem';
import MainSectionTitle from '../../common/MainSectionTitle';
import StudentList from '../../common/StudentList';
import { usePointQuery } from '../../../apis/points';
import { useSort } from '../../../contexts/sort';
import { sortedStudents } from '../../../libs/utils';
import { SelectedUserIds, Student } from '../../../apis/types';
import { useSearch } from '../../../contexts/search';
interface PropsType {
    onClick: (id: string, isCheckbox?: boolean) => void;
    students: Student[];
    id: SelectedUserIds;
    setId: React.Dispatch<React.SetStateAction<SelectedUserIds>>;
}

const PointList = ({
    onClick,
    students,
    id,
    setId,
}: PropsType) => {
    const { sortType } = useSort();
    const { pattern } = useSearch();

    useEffect(() => {
        setId(Object.fromEntries(students.map(student => [student.id, false])));
    }, [sortType]);
    
    const toggleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        const sortedStudentsList = sortedStudents(sortType, students);
        if(e.currentTarget.checked) setId(Object.fromEntries(sortedStudentsList.map(student => [student.id, true])));
        else setId(Object.fromEntries(sortedStudentsList.map(student => [student.id, false])));
    }

    const columns = [
        <input 
            type="checkbox" 
            checked={Object.values(id).length !== 0 && Object.values(id).indexOf(false) === -1} 
            onChange={toggleSelectAll} 
        />, 
        "학번", "이름", "상점", "벌점", "1단계", "2단계", "3단계", "1Out", "2Out"
    ];

    return (
        <MainContainer>
            <MainSectionTitle>학생 리스트</MainSectionTitle>
            <StudentList columns={columns}>
                {
                    sortedStudents(sortType, students)
                    .filter(({ name }) => pattern.test(name))
                    .map(student => <PointListItem 
                        key={student.id} 
                        onClick={onClick} 
                        isActive={id[student.id]} 
                        {...student} 
                    />)
                }
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
    grid-row: 1 / 3;
`;

export default PointList;