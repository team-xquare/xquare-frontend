import React from 'react';
import styled from '@emotion/styled';
import MainSectionTitle from '../common/MainSectionTitle';
import { Body1, Body2, Caption } from '@semicolondsm/ui';
import { useHistoryByIdQuery } from '../../apis/points';
import { SelectedUserIds } from '../../apis/types';
import KebabMenu from '../common/KebabMenu';

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
                    {/* {data ? (
                        data.length ? (
                            data.map((history) => <Body1 key={history.id}>{history.reason}</Body1>)
                        ) : (
                            <Body1>상벌점 기록이 없습니다.</Body1>
                        )
                    ) : isLoading ? (
                        <>로딩중</>
                    ) : (
                        <Body1>학생을 선택해주세요 !</Body1>
                    )} */}
                    <HistoryItemContainer>
                        <TextContainer>
                            <Body2>기숙사 봉사활동</Body2>
                            <Caption>2023-02-28</Caption>
                        </TextContainer>
                        <MenuRightContainer>
                            <MenuPointText>2</MenuPointText>
                            <KebabMenu
                                item={['삭제하기', '수정하기']}
                                callBack={(item) => {}}></KebabMenu>
                        </MenuRightContainer>
                    </HistoryItemContainer>
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
