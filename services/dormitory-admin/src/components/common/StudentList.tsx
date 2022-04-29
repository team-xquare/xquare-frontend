import React from 'react';
import styled from '@emotion/styled';
import { Body1, Button, Select } from '@semicolondsm/ui';
import { SortingEnum } from '../../apis/types';
import { useSort } from '../../contexts/sort';
import { download, getDateString } from '../../libs/utils';

interface PropsType {
    children: React.ReactNode;
    columns: React.ReactNode[];
}

const StudentList = ({
    children,
    columns,
}: PropsType) => {
    const { setSortType } = useSort();

    return (
        <MainBlock>
            <MainBlockHeader>
                <Select items={Object.values(SortingEnum)} onChange={setSortType} value={SortingEnum.a} placeholder="" />
                <Button onClick={() => download(`${process.env.NEXT_PUBLIC_API_BASE_URL}/excel/point`, `${getDateString()}-상벌점현황`)} fill="border" size="sm">CSV 내보내기</Button>
            </MainBlockHeader>
            <MainListWrapper length={columns.length}>
                {
                    columns.map((column, i) => <MainListHaeder key={i}>{column}</MainListHaeder>)
                }
                {children}
            </MainListWrapper>
        </MainBlock>
    );
}

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

const MainListHaeder = styled(Body1)`
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