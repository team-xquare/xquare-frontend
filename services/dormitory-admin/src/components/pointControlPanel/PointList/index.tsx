import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import PointListItem from './PointListItem';
import MainSectionTitle from '../../common/MainSectionTitle';
import StudentList from '../../common/StudentList';
import { usePointQuery } from '../../../apis/points';
import { useSort } from '../../../contexts/sort';
import { sortedStudents } from '../../../libs/utils';
import { SelectedUserIds, SortingEnum, Student } from '../../../apis/types';
const data: Student[] = [
    { id: "helo", bad_point: 10, good_point: 10, name: "Asd", num: "1233", penalty_level: 3, penalty_training_status: false },
    { id: "asd", bad_point: 10, good_point: 10, name: "zxc", num: "1232", penalty_level: 4, penalty_training_status: false },
    { id: "zxc", bad_point: 10, good_point: 10, name: "qwe", num: "1234", penalty_level: 5, penalty_training_status: true },
];

interface PropsType {
    onClick: (id: string, secondParam: boolean | Student[]) => void;
    id: SelectedUserIds;
    setId: React.Dispatch<React.SetStateAction<SelectedUserIds>>;
}

const PointList = ({
    onClick,
    id,
    setId,
}: PropsType) => {
    // const { data, isLoading, error } = usePointQuery();
    const { sortType } = useSort();

    useEffect(() => {
        setId(Object.fromEntries(data.map(student => [student.id, false])));
    }, [sortType]);
    
    const toggleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.currentTarget.checked) setId(Object.fromEntries(data.map(student => [student.id, true])));
        else setId(Object.fromEntries(data.map(student => [student.id, false])));
    }

    const columns = [<input type="checkbox" checked={Object.values(id).indexOf(false) === -1} onChange={toggleSelectAll} />, "호실", "학번", "이름", "상점", "벌점", "1단계", "2단계", "3단계", "1Out", "2Out"];

    return (
        <MainContainer>
            <MainSectionTitle>학생 리스트</MainSectionTitle>
            <StudentList columns={columns}>
                {
                    sortedStudents(sortType, data).map(student => <PointListItem 
                        key={student.id} 
                        onClick={(id: string, isCheckbox?: boolean) => onClick(id, isCheckbox ?? data)} 
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
`;

export default PointList;