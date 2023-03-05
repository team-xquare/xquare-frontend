import React from 'react';
import styled from '@emotion/styled';
import { Body1, Body2 } from '@semicolondsm/ui';
import { SelectedUserIds, Student } from '../../../apis/types';

import { Table, TableBody, TableCell, TableHead, TableRow } from '../../common/Table';
import StudentListItem from './StudentListItem';

interface PropsType {
    isMultiSelected: boolean;
    students: Student[];
    selectedIds: SelectedUserIds;
    setSelectedUserIds: React.Dispatch<React.SetStateAction<SelectedUserIds>>;
}

const StudentList = ({ isMultiSelected, students, selectedIds, setSelectedUserIds }: PropsType) => {
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

    const cellSizes = [
        ...(isMultiSelected ? ['40px'] : []),
        'minmax(11%, 1fr)',
        'minmax(11%, 1fr)',
        'minmax(11%, 1fr)',
        'minmax(11%, 1fr)',
        'minmax(11%, 1fr)',
        'minmax(11%, 2fr)',
    ];

    return (
        <Table>
            <TableHead>
                <TableRow cellSizes={cellSizes} style={{ padding: '8px 28px' }}>
                    {isMultiSelected && (
                        <TableCell scope="col" justify="center" align="center">
                            <input
                                type="checkbox"
                                onChange={handleSelectAll}
                                checked={students.every(
                                    ({ id: studentId }) => selectedIds[studentId],
                                )}
                            />
                        </TableCell>
                    )}

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
                        cellSizes={cellSizes}
                        isMultiSelected={isMultiSelected}
                        isActive={!!selectedIds[student.id]}
                        onClick={() => {
                            if (isMultiSelected) {
                                setSelectedUserIds({
                                    ...selectedIds,
                                    [student.id]: !selectedIds[student.id],
                                });
                            } else {
                                setSelectedUserIds({
                                    [student.id]: true,
                                });
                            }
                        }}
                        {...student}
                    />
                ))}
            </TableBody>
        </Table>
    );
};

export default StudentList;
