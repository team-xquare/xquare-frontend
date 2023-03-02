import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import MainSectionTitle from '../../common/MainSectionTitle';
import { Body1, Button } from '@semicolondsm/ui';
import { useNoticeQuery } from '../../../apis/notices';
import NoticeListItem from './NoticeListItem';
import { useModal } from '../../../contexts/modal';

interface Props {
    setActiveId: (id: string) => void;
    activeId: string | null;
}

const NoticeList = ({ setActiveId, activeId }: Props) => {
    const { data: feeds } = useNoticeQuery();
    const { openModal } = useModal();

    return (
        <MainContainer>
            <MainSectionTitle>공지사항 목록</MainSectionTitle>
            <MainBlock>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div></div>
                    <Button size="sm" onClick={openModal}>
                        새 공지사항 작성하기
                    </Button>
                </div>
                <MainListWrapper>
                    <MainListHeader>제목</MainListHeader>
                    <MainListHeader>날짜</MainListHeader>
                    <MainListHeader>좋아요</MainListHeader>
                    <MainListHeader>댓글</MainListHeader>
                    {feeds &&
                        feeds.map((feeds) => (
                            <NoticeListItem
                                key={feeds.feed_id}
                                {...feeds}
                                isActive={feeds.feed_id === `${activeId}`}
                                onClick={setActiveId}
                            />
                        ))}
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
    grid-row: 1 / 3;
`;

const MainBlock = styled.div`
    width: 100%;
    height: 100%;
    min-height: 0;
    padding: 16px 20px;
    display: flex;
    background: ${(props) => props.theme.colors.gray200};
    display: flex;
    flex-direction: column;
`;

const MainListWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: 50px;
    grid-template-columns: 3fr repeat(3, 1fr);
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
    background: ${(props) => props.theme.colors.gray200};
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 20px;
    border-bottom: 1px solid ${(props) => props.theme.colors.gray400};
`;

export default NoticeList;
