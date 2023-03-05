import React from 'react';
import styled from '@emotion/styled';
import { Body1, Body2 } from '@semicolondsm/ui';
import { Notice } from '../../../apis/types';
import { getDateString } from '../../../libs/utils';
import { TableCell, TableRow } from '../../common/Table';

interface Props {
    onClick: (id: string) => void;
    isActive: boolean;
}

const cellSizes = ['minmax(11%, 3fr)', 'minmax(11%, 1fr)', 'minmax(11%, 1fr)', 'minmax(11%, 1fr)'];
const NoticeListItem = ({
    feed_id,
    created_at,
    content,
    onClick,
    isActive,
    like_count,
    comment_count,
}: Notice & Props) => {
    const onClickItem = () => onClick(feed_id);

    return (
        <TableRow
            cellSizes={cellSizes}
            isBorder
            customStyle
            isCursor
            style={{ padding: '8px 28px' }}>
            <TableCell scope="col" justify="flex-start" onClick={() => onClickItem()}>
                <Body2>{content.slice(0, 20)}</Body2>
            </TableCell>
            <TableCell scope="col" justify="flex-start" onClick={() => onClickItem()}>
                <Body2>{getDateString(new Date(created_at))}</Body2>
            </TableCell>
            <TableCell scope="col" justify="flex-start" onClick={() => onClickItem()}>
                <Body2>{like_count}</Body2>
            </TableCell>
            <TableCell scope="col" justify="flex-start" onClick={() => onClickItem()}>
                <Body2>{comment_count}</Body2>
            </TableCell>
        </TableRow>
    );
};

const NoticeItemContainer = styled.div``;

export default NoticeListItem;
