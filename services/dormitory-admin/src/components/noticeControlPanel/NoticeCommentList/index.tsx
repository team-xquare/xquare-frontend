import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import MainSectionTitle from '../../common/MainSectionTitle';
import { useCommentQuery, useNoticeQuery } from '../../../apis/notices';
import CommentItem from './CommentItem';

interface PropsType {
    activeId: string | null;
}

const NoticeCommentList = ({ activeId }: PropsType) => {
    const { data } = activeId ? useCommentQuery(activeId) : { data: undefined };

    return (
        <MainContainer>
            <MainSectionTitle>댓글 목록</MainSectionTitle>
            <MainBlock>
                {data?.map((item) => (
                    <CommentItem key={item.comment_id} {...item}></CommentItem>
                ))}
            </MainBlock>
            <InputWrapper></InputWrapper>
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
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 12px 12px 0 0;
    min-height: 0;
    padding: 16px 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    background: ${(props) => props.theme.colors.gray200};
    overflow: scroll;
`;

const InputWrapper = styled.div`
    width: 100%;
    height: 60px;
    padding: 8px 16px;
    border-radius: 0 0 12px 12px;
    background-color: ${({ theme }) => theme.colors.gray100};
`;

export default NoticeCommentList;
