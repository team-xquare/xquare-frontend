import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Body1, Body2, Button, Caption } from '@semicolondsm/ui';
import { useDeleteRuleHistory, useHistoryByIdQuery, usePointQuery } from '../../apis/points';
import { SelectedUserIds, Student } from '../../apis/types';
import KebabMenu from '../common/KebabMenu';
import BlockContainer from '../common/BlockContainer';
import { Flex } from '../common/Flex';
import Spinner from '../common/Spinner';

interface PropsType {
    id: SelectedUserIds;
    setSelectedUserIds: React.Dispatch<React.SetStateAction<SelectedUserIds>>;
}

const PointHistory = ({ id, setSelectedUserIds }: PropsType) => {
    const { data, isLoading, error } = useHistoryByIdQuery(id);
    const { mutate: deleteMutate } = useDeleteRuleHistory(id);
    const stdIds = Object.keys(id).filter((key) => id[key] && key);
    const [historyId, setHistoryId] = useState('');
    const itemAction = {
        삭제하기: () => deleteMutate(historyId),
    } as const;

    return (
        <MainContainer>
            <BlockContainer title={stdIds.length > 1 ? '선택한 학생' : '내역'}>
                <MainListWrapper>
                    {isLoading ? (
                        <Flex align="center" justify="center" fullHeight fullWidth>
                            <Spinner />
                        </Flex>
                    ) : stdIds.length > 1 ? (
                        stdIds.map((stu) => (
                            <StudentListItem>
                                <Body2>{`${(id[stu] as Student).num} ${
                                    (id[stu] as Student).name
                                }`}</Body2>
                                <Button
                                    size="sm"
                                    fill="purpleLight"
                                    onClick={() =>
                                        setSelectedUserIds((state) => ({ ...state, [stu]: false }))
                                    }>
                                    선택 취소
                                </Button>
                            </StudentListItem>
                        ))
                    ) : data ? (
                        data.length ? (
                            data.map((history) => (
                                <HistoryItemContainer
                                    key={history.id}
                                    onClick={() => setHistoryId(String(history.id))}>
                                    <Flex direction="column" gap={2}>
                                        <Body2>{history.reason}</Body2>
                                        <Caption color="gray600">{history.date}</Caption>
                                    </Flex>
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
    overflow-y: auto;
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

const StudentListItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-items: left;
    padding: 8px 24px;

    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.white};
    & div {
        width: 100%;
        min-width: 0;
    }

    & p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

export default PointHistory;
