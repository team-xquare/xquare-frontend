import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import MainSectionTitle from '../../common/MainSectionTitle';
import { Body1, Body2, Button } from '@semicolondsm/ui';
import { useNoticeQuery } from '../../../apis/notices';
import NoticeListItem from './NoticeListItem';
import { useModal } from '../../../contexts/modal';
import { Table, TableBody, TableCell, TableHead, TableRow } from '../../common/Table';
import BlockContainer from '../../common/BlockContainer';
import FullHeightScrollArea from '../../common/FullHeightScrollArea';

interface Props {
    setActiveId: (id: string) => void;
    activeId: string | null;
}
const cellSizes = ['minmax(11%, 3fr)', 'minmax(11%, 1fr)', 'minmax(11%, 1fr)', 'minmax(11%, 1fr)'];
const NoticeList = ({ setActiveId, activeId }: Props) => {
    const { data: feeds } = useNoticeQuery();
    const { openModal } = useModal();

    return (
        <MainContainer>
            <BlockContainer
                title="공자사항 목록"
                titleRightContent={
                    <Button size="sm" onClick={openModal} fill="purple">
                        작성하기
                    </Button>
                }>
                <FullHeightScrollArea>
                    <Table>
                        <TableHead isBorder={false}>
                            <TableRow
                                isBorder
                                cellSizes={cellSizes}
                                style={{ padding: '8px 28px' }}>
                                <TableCell scope="col" justify="flex-start">
                                    <Body2>제목</Body2>
                                </TableCell>
                                <TableCell scope="col" justify="flex-start">
                                    <Body2>날짜</Body2>
                                </TableCell>
                                <TableCell scope="col" justify="flex-start">
                                    <Body2>좋아요</Body2>
                                </TableCell>
                                <TableCell scope="col" justify="flex-start">
                                    <Body2>댓글</Body2>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {feeds &&
                                feeds.map((feeds) => (
                                    <NoticeListItem
                                        key={feeds.feed_id}
                                        {...feeds}
                                        isActive={feeds.feed_id === `${activeId}`}
                                        onClick={setActiveId}
                                    />
                                ))}
                        </TableBody>
                    </Table>
                </FullHeightScrollArea>
            </BlockContainer>
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

const MainListWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: grid;
    margin-top: 20px;
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

export default NoticeList;
