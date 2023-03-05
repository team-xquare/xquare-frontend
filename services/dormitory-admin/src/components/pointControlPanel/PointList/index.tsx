import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Select, Button } from '@semicolondsm/ui';
import PointListItem from './StudentListItem';
import MainSectionTitle from '../../common/MainSectionTitle';
import { SelectedUserIds, SortingEnum, Student } from '../../../apis/types';
import SelectInput from '../../common/SelectInput';
import { useSort } from '../../../contexts/sort';
import { useSearch } from '../../../contexts/search';
import { usePointExcel } from '../../../apis/points';
import StudentList from './StudentList';
import { Flex } from '../../common/Flex';

interface PropsType {
    students: Student[];
    selectedIds: SelectedUserIds;
    setSelectedUserIds: React.Dispatch<React.SetStateAction<SelectedUserIds>>;
}

const PointList = ({ students, selectedIds, setSelectedUserIds }: PropsType) => {
    const { setSortType } = useSort();
    const { setQuery, query } = useSearch();
    const pointExcel = usePointExcel();

    return (
        <MainContainer>
            <MainSectionTitle>학생 리스트</MainSectionTitle>
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
                    <Flex gap={8}>
                        <Button onClick={() => pointExcel()} fill="purple" size="sm">
                            엑셀 다운로드
                        </Button>
                    </Flex>
                </MainBlockHeader>
                <StudentList
                    students={students}
                    selectedIds={selectedIds}
                    setSelectedUserIds={setSelectedUserIds}
                />
            </MainBlock>
        </MainContainer>
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

const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    grid-row: 1 / 3;
`;

export default PointList;
