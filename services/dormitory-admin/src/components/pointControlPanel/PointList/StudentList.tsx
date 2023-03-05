import React from 'react';
import styled from '@emotion/styled';
import { Body1, Body2 } from '@semicolondsm/ui';
import { SelectedUserIds, Student } from '../../../apis/types';

import { Table, TableBody, TableCell, TableHead, TableRow } from '../../common/Table';
import StudentListItem from './StudentListItem';

interface PropsType {
    students: Student[];
    selectedIds: SelectedUserIds;
    setSelectedUserIds: React.Dispatch<React.SetStateAction<SelectedUserIds>>;
}

const cellSize = [
    '40px',
    'minmax(11%, 1fr)',
    'minmax(11%, 1fr)',
    'minmax(11%, 1fr)',
    'minmax(11%, 1fr)',
    'minmax(11%, 1fr)',
    'minmax(11%, 2fr)',
];
const StudentList = ({ students, selectedIds, setSelectedUserIds }: PropsType) => {
    const handleSelectAll = () => {
        if (students.every(({ id: studentId }) => selectedIds[studentId])) {
            setSelectedUserIds((prev) => ({
                ...prev,
                ...students.reduce((acc, { id: studentId }) => {
                    acc[studentId] = false;
                    return acc;
                }, {} as SelectedUserIds),
            }));
        } else {
            setSelectedUserIds(
                students.reduce((acc, { id: studentId }) => {
                    acc[studentId] = true;
                    return acc;
                }, {} as SelectedUserIds),
            );
        }
    };

    const columns = ['학번', '이름', '상점', '벌점', '다벌점 단계', '다벌점 완료 여부'];

    return (
        <Table>
            <TableHead>
                <TableRow cellSizes={cellSize} style={{ padding: '8px 28px' }}>
                    <TableCell scope="col" justify="center" align="center">
                        <input
                            type="checkbox"
                            onChange={handleSelectAll}
                            checked={students.every(({ id: studentId }) => selectedIds[studentId])}
                        />
                    </TableCell>

                    {columns.map((column, i) => (
                        <TableCell key={i} scope="col" justify="center" align="center">
                            <Body2>{column}</Body2>
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {students.map((student) => (
                    <StudentListItem
                        key={student.id}
                        onClick={() =>
                            setSelectedUserIds({
                                ...selectedIds,
                                [student.id]: !selectedIds[student.id],
                            })
                        }
                        isActive={selectedIds[student.id]}
                        {...student}
                    />
                ))}
            </TableBody>
        </Table>
    );
};

const FlexBox = styled.div`
    display: flex;
    align-content: center;
    gap: 6px;
`;

const MainBlock = styled.div`
    width: 100%;
    height: 100%;
    min-height: 0;
    display: flex;
    flex-direction: column;
    user-select: none;
    background: ${(props) => props.theme.colors.white};
`;

const MainBlockHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
`;

const MainListWrapper = styled.div<{ length: number }>`
    width: 100%;
    height: 100%;
    position: relative;
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: 50px;
    grid-template-columns: ${(props) => `repeat(${props.length}, auto)`};
    align-items: center;
    justify-items: center;
    overflow-y: scroll;

    & div {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const MainListHeader = styled(Body1)`
    top: 0;
    position: sticky;
    background: ${(props) => props.theme.colors.white};
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${(props) => props.theme.colors.gray400};
`;

export default StudentList;
