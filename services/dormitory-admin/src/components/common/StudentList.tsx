import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Body1, Button, Select } from '@semicolondsm/ui';
import { SortingEnum } from '../../apis/types';
import { useSort } from '../../contexts/sort';
import { download, getDateString } from '../../libs/utils';
import { useSearch } from '../../contexts/search';

interface PropsType {
    children: React.ReactNode;
    columns: React.ReactNode[];
}

const excelTypes = ["상벌점현황", "잔류현황"] as const;

type ExcelType = typeof excelTypes[number];

const excelValue = {
    상벌점현황: "point",
    잔류현황: "stay",
} as Record<ExcelType, string>;

const StudentList = ({
    children,
    columns,
}: PropsType) => {
    const { setSortType } = useSort();
    const { setQuery } = useSearch();
    const [excelType, setExcelType] = useState<ExcelType>("상벌점현황");

    return (
        <MainBlock>
            <MainBlockHeader>
                <FlexBox>
                    <Select items={Object.values(SortingEnum)} onChange={setSortType} value={SortingEnum.a} placeholder="" />
                    <Input type="text" placeholder="학생 이름을 검색하세요" onChange={e => setQuery(e.target.value)} />
                </FlexBox>
                <FlexBox>
                    <Select items={excelTypes} onChange={v => setExcelType(v as ExcelType)} value={excelType} placeholder="" />
                    <Button 
                        onClick={() => download(`${process.env.NEXT_PUBLIC_API_BASE_URL}/excel/${excelValue[excelType]}`, `${getDateString()}-${excelType}`)} 
                        fill="border" 
                        size="sm"
                    >액셀 다운로드</Button>
                </FlexBox>
            </MainBlockHeader>
            <MainListWrapper length={columns.length}>
                {
                    columns.map((column, i) => <MainListHeader key={i}>{column}</MainListHeader>)
                }
                {children}
            </MainListWrapper>
        </MainBlock>
    );
}

const Input = styled.input`
    padding: 0 12px;
    height: 36px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.gray400};
    outline: none;
    background: ${({ theme }) => theme.colors.gray50};
`;

const FlexBox = styled.div`
    display: flex;
    align-content: center;
    gap: 6px;
`;

const MainBlock = styled.div`
    width: 100%;
    height: 100%;
    min-height: 0;
    padding: 16px 20px;
    display: flex;
    flex-direction: column;
    user-select: none;
    background: ${props => props.theme.colors.gray200};
`;

const MainBlockHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
`;

const MainListWrapper = styled.div<{ length: number; }>`
    width: 100%;
    height: 100%;
    position: relative;
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: 50px;
    grid-template-columns: ${props => `repeat(${props.length}, auto)`};
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
    background: ${props => props.theme.colors.gray200};
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${props => props.theme.colors.gray400};
`;

export default StudentList;