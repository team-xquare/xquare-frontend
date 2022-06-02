import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import MainSectionTitle from '../common/MainSectionTitle';
import { Title3, Body1, Button } from '@semicolondsm/ui';

interface PropsType {
}

const NoticePreview = ({

}: PropsType) => {

    return (
        <MainContainer>
            <MainSectionTitle>미리보기</MainSectionTitle>
            <MainBlock>
                <PreviewFlexBox>
                    <PreviewTitle>제목입니다.</PreviewTitle>
                    <PreviewFlexBox>
                        <Button size="sm">수정하기</Button>
                        <Button size="sm">삭제하기</Button>
                    </PreviewFlexBox>
                </PreviewFlexBox>
                <PreviewContent>
                    내용입니다.
                </PreviewContent>
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
    flex-direction: column;
    background: ${props => props.theme.colors.gray200};
`;

const PreviewFlexBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`;

const PreviewTitle = styled(Title3)`
    max-width: 50%;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const PreviewContent = styled(Body1)`
    margin-top: 20px;
`;

export default NoticePreview;