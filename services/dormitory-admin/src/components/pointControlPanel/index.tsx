import styled from '@emotion/styled';
import React, { FC, useState } from 'react';
import { usePointQuery } from '../../apis/points';
import { SelectedUserIds } from '../../apis/types';
import { useSearch } from '../../contexts/search';
import { useSort } from '../../contexts/sort';
import { sortedStudents } from '../../libs/utils';
import PointHistory from './PointHistory';
import PointList from './PointList';
import PointRule from './PointRule';

interface PointProps {}

const Point: FC<PointProps> = () => {
    const { data, isLoading, error } = usePointQuery();
    const [selectedUserIds, setSelectedUserIds] = useState<SelectedUserIds>({});

    const { sortType } = useSort();
    const { pattern } = useSearch();

    const sortedStudentsList = sortedStudents(sortType, data);
    const filteredStudent = sortedStudentsList.filter(({ name }) => pattern.test(name));

    return (
        <PointContainer>
            <PointList
                selectedIds={selectedUserIds}
                setSelectedUserIds={setSelectedUserIds}
                students={filteredStudent}
            />
            <PointRule id={selectedUserIds} />
            <PointHistory id={selectedUserIds} />
        </PointContainer>
    );
};

export default Point;

const PointContainer = styled.section`
    width: 100%;
    height: 100%;
    padding: 74px 60px 0 60px;
    display: grid;
    grid-template-columns: 700px minmax(400px, 1fr);
    grid-template-rows: 1fr 1fr 0px;
    grid-gap: 40px;
    overflow-x: auto;
`;
