import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Select, Button } from '@semicolondsm/ui';
import MainSectionTitle from '../../common/MainSectionTitle';
import { SelectedUserIds, SortingEnum } from '../../../apis/types';
import SelectInput from '../../common/SelectInput';
import { useSort } from '../../../contexts/sort';
import { useSearch } from '../../../contexts/search';
import { usePointExcel, usePointQuery } from '../../../apis/points';
import StudentList from './StudentList';
import { Flex } from '../../common/Flex';
import { sortedStudents } from '../../../libs/utils';
import BlockContainer from '../../common/BlockContainer';

interface PropsType {
    selectedIds: SelectedUserIds;
    setSelectedUserIds: React.Dispatch<React.SetStateAction<SelectedUserIds>>;
}

const PointList = ({ selectedIds, setSelectedUserIds }: PropsType) => {
    const { data, isLoading, error } = usePointQuery();

    const { setSortType } = useSort();
    const { setQuery, query } = useSearch();
    const pointExcel = usePointExcel();

    const { sortType } = useSort();
    const { pattern } = useSearch();

    const sortedStudentsList = sortedStudents(sortType, data);
    const filteredStudent = sortedStudentsList.filter(({ name }) => pattern.test(name));

    const [isMultiSelected, setMultiSelected] = useState<boolean>(false);

    useEffect(() => {
        setSelectedUserIds({});
    }, [isMultiSelected]);

    return (
        <MainContainer>
            <BlockContainer title="학생 리스트">
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
                        <Button
                            onClick={() => setMultiSelected((prev) => !prev)}
                            fill="border"
                            size="sm">
                            {isMultiSelected ? '다중 선택 취소' : '다중 선택'}
                        </Button>
                        <Button onClick={() => pointExcel()} fill="purple" size="sm">
                            엑셀 다운로드
                        </Button>
                    </Flex>
                </MainBlockHeader>
                <StudentList
                    isMultiSelected={isMultiSelected}
                    students={filteredStudent}
                    selectedIds={selectedIds}
                    setSelectedUserIds={setSelectedUserIds}
                />
            </BlockContainer>
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
    width: 100%;
    padding: 16px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
