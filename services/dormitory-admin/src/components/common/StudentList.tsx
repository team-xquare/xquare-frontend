import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Body1, Body2, Button, Select } from '@semicolondsm/ui';
import { SortingEnum } from '../../apis/types';
import { useSort } from '../../contexts/sort';
import { download, getDateString } from '../../libs/utils';
import { useSearch } from '../../contexts/search';
import { useRouter } from 'next/router';
import SelectInput from './SelectInput';
import { Table, TableBody, TableCell, TableHead, TableRow } from './Table';
import { Flex } from './Flex';
import { Certificate } from 'crypto';
import { usePointExcel } from '../../apis/points';

interface PropsType {
    children: React.ReactNode;
    columns: React.ReactNode[];
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
const StudentList = ({ children, columns }: PropsType) => {
    const { setSortType } = useSort();
    const { setQuery, query } = useSearch();
    const pointExcel = usePointExcel();
    return (
        <MainBlock>
            <MainBlockHeader>
                <FlexBox>
                    <Select
                        items={Object.values(SortingEnum)}
                        onChange={setSortType}
                        value={SortingEnum.a}
                        placeholder=""
                    />
                    <SelectInput
                        type="text"
                        placeholder="학생 이름을 검색하세요"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </FlexBox>
                <FlexBox>
                    <Button onClick={() => pointExcel()} fill="purple" size="sm">
                        엑셀 다운로드
                    </Button>
                </FlexBox>
            </MainBlockHeader>
            <Table>
                <TableHead>
                    <TableRow cellSizes={cellSize} style={{ padding: '8px 28px' }}>
                        {columns.map((column, i) => (
                            <TableCell key={i} scope="col" justify="center" align="center">
                                <Body2>{column}</Body2>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>{children}</TableBody>
            </Table>
        </MainBlock>
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
