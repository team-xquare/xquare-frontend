import React from 'react';
import styled from '@emotion/styled';
import { Body1 } from '@semicolondsm/ui';
import { Notice } from '../../../apis/types';
import { getDateString } from '../../../libs/utils';

interface Props {
    onClick: (id: string) => void;
    isActive: boolean;
}

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
        <>
            <div onClick={() => onClickItem()}>
                <MainListItem isActive={isActive}>{content.slice(0, 20)}</MainListItem>
            </div>
            <div onClick={() => onClickItem()}>
                <MainListItem isActive={isActive}>
                    {getDateString(new Date(created_at))}
                </MainListItem>
            </div>
            <div onClick={() => onClickItem()}>
                <MainListItem isActive={isActive}>{like_count}</MainListItem>
            </div>
            <div onClick={() => onClickItem()}>
                <MainListItem isActive={isActive}>{comment_count}</MainListItem>
            </div>
        </>
    );
};

const MainListItem = styled(Body1)<{ isActive: boolean }>`
    background: ${({ isActive, theme }) =>
        isActive ? theme.colors.gray300 : theme.colors.gray200};
    width: 100%;
    height: 100%;
    padding-left: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export default NoticeListItem;
