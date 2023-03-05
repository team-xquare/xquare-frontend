import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import MainSectionTitle from '../../common/MainSectionTitle';
import { useCommentQuery, useNoticeQuery } from '../../../apis/notices';
import CommentItem from './CommentItem';
import BlockContainer from '../../common/BlockContainer';

interface PropsType {
    activeId: string | null;
}

const NoticeCommentList = ({ activeId }: PropsType) => {
    const { data } = activeId ? useCommentQuery(activeId) : { data: undefined };

    return (
        <MainContainer>
            <BlockContainer title="댓글 목록">
                <MainListWrapper>
                    {data?.map((item) => (
                        <CommentItem key={item.comment_id} {...item}></CommentItem>
                    ))}
                </MainListWrapper>
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
`;

const MainListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    padding: 12px 24px;

    overflow: auto;
`;

export default NoticeCommentList;
