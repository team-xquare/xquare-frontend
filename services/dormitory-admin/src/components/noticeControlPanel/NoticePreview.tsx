import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import MainSectionTitle from '../common/MainSectionTitle';
import { Subtitle1, Body1, Button, Subtitle3 } from '@semicolondsm/ui';
import { useDeleteNoticeMutation, useNoticeQuery, useUpdateNoticeMutation } from '../../apis/notices';

interface Props {
    activeId: number | null;
}

const NoticePreview = ({
    activeId,
}: Props) => {
    const [isEditing, setIsEditing] = useState(false);
    const { data: notices } = useNoticeQuery();
    const { mutate: deleteNotice } = useDeleteNoticeMutation();
    const { mutate: updateNotice } = useUpdateNoticeMutation();
    const { id, content, title } = (notices ?? []).filter(({ id }) => id === `${activeId}`)[0] ?? {};
    const contentRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);

    const onUpdate = () => {
        updateNotice({
            id,
            title: titleRef.current?.innerText,
            content: contentRef.current?.innerText,
        });
        return false;
    }

    const onDelete = () => {
        deleteNotice(id);
    }

    return (
        <MainContainer>
            <MainSectionTitle>미리보기</MainSectionTitle>
            <MainBlock>
                <PreviewFlexBox>
                    <PreviewTitle>
                        <div ref={titleRef} contentEditable={isEditing}>{title}</div>
                    </PreviewTitle>
                    <PreviewFlexBox>
                        <Button onClick={() => setIsEditing(prev => prev ? onUpdate() : !prev)} size="sm">{isEditing ? "수정완료" : "수정하기"}</Button>
                        <Button onClick={onDelete} size="sm">삭제하기</Button>
                    </PreviewFlexBox>
                </PreviewFlexBox>
                <PreviewContent>
                    <div ref={contentRef} contentEditable={isEditing}>
                        {content}
                    </div>
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

const PreviewTitle = styled(Subtitle3)`
    max-width: 65%;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const PreviewContent = styled(Body1)`
    margin-top: 20px;
    height: 100%;
    overflow-y: auto;
    white-space: pre-wrap;
`;

export default NoticePreview;