import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Body1, Body2, Caption } from '@semicolondsm/ui';
import { useDeleteRuleHistory, useHistoryByIdQuery } from '../../apis/points';
import { SelectedUserIds } from '../../apis/types';
import KebabMenu from '../common/KebabMenu';
import BlockContainer from '../common/BlockContainer';
import { Flex } from '../common/Flex';
import Spinner from '../common/Spinner';

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
            <BlockContainer title="내역">
                <MainListWrapper>
                    {isLoading ? (
                        <Flex align="center" justify="center" fullHeight fullWidth>
                            <Spinner />
                        </Flex>
                    ) : data ? (
                        data.length ? (
                            data.map((history) => (
                                <HistoryItemContainer
                                    key={history.id}
                                    onClick={() => setHistoryId(String(history.id))}>
                                    <TextContainer>
                                        <Body2>{history.reason}</Body2>
                                        <Caption></Caption>
                                    </TextContainer>
                                    <Flex gap={18} align="center">
                                        <Body1
                                            color={history.point_type ? 'green800' : 'red200'}
                                            fontWeight="medium">
                                            {history.point}
                                        </Body1>
                                        <KebabMenu
                                            item={['삭제하기']}
                                            callBack={(item) => {
                                                itemAction[item]();
                                            }}
                                        />
                                    </Flex>
                                </HistoryItemContainer>
                            ))
                        ) : (
                            <GuideMessage>상벌점 기록이 없습니다.</GuideMessage>
                        )
                    ) : stdIds.length > 1 ? (
                        <GuideMessage>학생을 한명만 선택해주세요.</GuideMessage>
                    ) : (
                        <GuideMessage>학생을 선택해주세요 !</GuideMessage>
                    )}
                </MainListWrapper>
            </BlockContainer>
        </MainContainer>
    );
};

const GuideMessage = styled(Body1)`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: ${({ theme }) => theme.fonts.weight.regular};

    color: ${({ theme }) => theme.colors.gray600};
`;

const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
    padding: 8px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export default PointHistory;
