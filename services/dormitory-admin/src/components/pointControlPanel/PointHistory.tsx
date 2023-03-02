import React from 'react';
import styled from '@emotion/styled';
import MainSectionTitle from '../common/MainSectionTitle';
import { Body1 } from '@semicolondsm/ui';
import { useHistoryByIdQuery } from '../../apis/points';
import { SelectedUserIds } from '../../apis/types';

interface PropsType {
    id: SelectedUserIds;
}

const PointHistory = ({ id }: PropsType) => {
    const { data, isLoading, error } = useHistoryByIdQuery(id);

    return (
        <MainContainer>
            <MainSectionTitle>내역</MainSectionTitle>
            <MainBlock>
                <MainListWrapper>
                    {data ? (
                        data.length ? (
                            data.map((history) => <Body1 key={history.id}>{history.reason}</Body1>)
                        ) : (
                            <Body1>상벌점 기록이 없습니다.</Body1>
                        )
                    ) : isLoading ? (
                        <>로딩중</>
                    ) : (
                        <Body1>학생을 선택해주세요 !</Body1>
                    )}
                </MainListWrapper>
            </MainBlock>
        </MainContainer>
    );
};

const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const MainBlock = styled.div`
    width: 100%;
    height: 100%;
    min-height: 0;
    padding: 16px 20px;
    border-radius: 12px;
    display: flex;
    background: ${(props) => props.theme.colors.gray200};
`;

const MainListWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: 50px;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    overflow-y: scroll;
`;

export default PointHistory;
