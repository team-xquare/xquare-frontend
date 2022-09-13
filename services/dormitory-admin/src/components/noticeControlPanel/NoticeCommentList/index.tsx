import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import MainSectionTitle from '../../common/MainSectionTitle';

interface PropsType {
}

const NoticeCommentList = ({

}: PropsType) => {

    return (
        <MainContainer>
            <MainSectionTitle>댓글 목록</MainSectionTitle>
            <MainBlock>

            </MainBlock>
        </MainContainer>
    );
}

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
    display: flex;
    background: ${props => props.theme.colors.gray200};
`;

export default NoticeCommentList;