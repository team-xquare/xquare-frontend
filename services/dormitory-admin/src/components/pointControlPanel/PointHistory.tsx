import React, { useState } from 'react';
import styled from '@emotion/styled';
import MainSectionTitle from '../common/MainSectionTitle';
import { Body1, Body2, Caption } from '@semicolondsm/ui';
import { useDeleteRuleHistory, useHistoryByIdQuery } from '../../apis/points';
import { SelectedUserIds } from '../../apis/types';
import KebabMenu from '../common/KebabMenu';

interface PropsType {
    id: SelectedUserIds;
}

const PointHistory = ({ id }: PropsType) => {
    const { data, isLoading, error } = useHistoryByIdQuery(id);
    const { mutate: deleteMutate } = useDeleteRuleHistory(id);
    const stdIds = Object.keys(id).filter((key) => id[key] && key);
    const [historyId, setHistoryId] = useState('');
    const itemAction = {
        삭제하기: () => deleteMutate(historyId),
    } as const;

    return (
        <MainContainer>
            <MainSectionTitle>내역</MainSectionTitle>
            <MainBlock>
                <MainListWrapper>
                    {data ? (
                        data.length ? (
                            data.map((history) => (
                                <HistoryItemContainer
                                    key={history.id}
                                    onClick={() => setHistoryId(String(history.id))}>
                                    <TextContainer>
                                        <Body2>{history.reason}</Body2>
                                        <Caption></Caption>
                                    </TextContainer>
                                    <MenuRightContainer>
                                        <MenuPointText>{history.point}</MenuPointText>
                                        <KebabMenu
                                            item={['삭제하기']}
                                            callBack={(item) => {
                                                itemAction[item]();
                                            }}
                                        />
                                    </MenuRightContainer>
                                </HistoryItemContainer>
                            ))
                        ) : (
                            <Body1>상벌점 기록이 없습니다.</Body1>
                        )
                    ) : stdIds.length > 1 ? (
                        <Body1>학생을 한명만 선택해주세요.</Body1>
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
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    justify-items: center;
    overflow-y: scroll;
`;

const HistoryItemContainer = styled.div`
    width: 100%;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const MenuRightContainer = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
`;

const MenuPointText = styled.div`
    color: ${({ theme }) => theme.colors.gray800};
`;

export default PointHistory;
