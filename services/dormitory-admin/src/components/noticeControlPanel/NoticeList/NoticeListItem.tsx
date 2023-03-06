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
    title,
}: Notice & Props) => {
    const onClickItem = () => onClick(feed_id);

    return (
        <TableRow
            cellSizes={cellSizes}
            isActive={isActive}
            isBorder
            customStyle
            isCursor
            style={{ padding: '8px 28px' }}>
            <CustomTableCell scope="col" justify="flex-start" onClick={() => onClickItem()}>
                <Body2>{title}</Body2>
            </CustomTableCell>
            <CustomTableCell scope="col" justify="flex-start" onClick={() => onClickItem()}>
                <Body2>{getDateString(new Date(created_at))}</Body2>
            </CustomTableCell>
            <CustomTableCell scope="col" justify="flex-start" onClick={() => onClickItem()}>
                <Body2>{like_count}</Body2>
            </CustomTableCell>
            <CustomTableCell scope="col" justify="flex-start" onClick={() => onClickItem()}>
                <Body2>{comment_count}</Body2>
            </CustomTableCell>
        </TableRow>
    );
};

const NoticeItemContainer = styled.div``;

const CustomTableCell = styled(TableCell)`
    align-items: center;
    height: 40px;
`;

export default NoticeListItem;
