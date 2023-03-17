import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import MainSectionTitle from '../../common/MainSectionTitle';
import { Body1, Body2, Button } from '@semicolondsm/ui';
import { useNoticeQuery } from '../../../apis/notices';
import NoticeListItem from './NoticeListItem';
import { useModal } from '../../../contexts/modal';
import { Table, TableBody, TableCell, TableHead, TableRow } from '../../common/Table';
import BlockContainer from '../../common/BlockContainer';

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
            <BlockContainer title="공지사항 목록">
                <MainBlockHeader>
                    <Button size="sm" onClick={openModal} fill="purple">
                        새 공지사항 작성하기
                    </Button>
                </MainBlockHeader>
                <Table>
                    <TableHead>
                        <TableRow cellSizes={cellSizes} style={{ padding: '8px 28px' }} customStyle>
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

const MainBlockHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 16px 24px;
    width: 100%;
`;

export default NoticeList;
