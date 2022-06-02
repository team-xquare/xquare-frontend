import React, {  } from 'react';
import styled from '@emotion/styled';
import NoticeList from './NoticeList';
import NoticePreview from './NoticePreview';
import NoticeCommentList from './NoticeCommentList';

const NoticeLayout = () => {

    return (
        <NoticeContainer>
            <NoticeList />
            <NoticePreview />
            <NoticeCommentList />
        </NoticeContainer>
    );
}

const NoticeContainer = styled.section`
    width: 100%;
    height: 100%;
    padding: 74px 60px 0 60px;
    display: grid;
    grid-template-columns: 700px minmax(400px, 1fr);
    grid-template-rows: 3fr 2fr;
    grid-gap: 40px;
    overflow-x: auto;
`;

export default NoticeLayout;