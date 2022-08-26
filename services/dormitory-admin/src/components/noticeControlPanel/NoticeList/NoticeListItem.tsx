import React from 'react';
import styled from '@emotion/styled';
import { Body1 } from '@semicolondsm/ui';
import { Notice } from '../../../apis/types';
import { getDateString } from '../../../libs/utils';

interface Props {
    onClick: (id: number) => void;
    isActive: boolean;
}

const NoticeListItem = ({
    id,
    created_at,
    title,
    onClick,
    isActive,
}: Notice & Props) => {
    const onClickItem = () => onClick(Number(id));
    
    return (
        <>
            <div onClick={() => onClickItem()}>
                <MainListItem isActive={isActive}>{title}</MainListItem>
            </div>
            <div onClick={() => onClickItem()}>
                <MainListItem isActive={isActive}>{getDateString(new Date(created_at))}</MainListItem>
            </div>
            <div onClick={() => onClickItem()}>
                <MainListItem isActive={isActive}></MainListItem>
            </div>
            <div onClick={() => onClickItem()}>
                <MainListItem isActive={isActive}></MainListItem>
            </div>
        </>
    );
}


const MainListItem = styled(Body1)<{ isActive: boolean; }>`
    background: ${({ isActive, theme }) => isActive ? theme.colors.gray300 : theme.colors.gray200};
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export default NoticeListItem;