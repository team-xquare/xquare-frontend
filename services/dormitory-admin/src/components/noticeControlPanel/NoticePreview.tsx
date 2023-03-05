import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import MainSectionTitle from '../common/MainSectionTitle';
import { Button, Subtitle3 } from '@semicolondsm/ui';
import {
    useDeleteNoticeMutation,
    useNoticeQuery,
    useUpdateNoticeMutation,
} from '../../apis/notices';

interface Props {
    activeId: string | null;
}

const NoticePreview = ({ activeId }: Props) => {
    const [isEditing, setIsEditing] = useState(false);
    const { data: feeds } = useNoticeQuery();
    const { mutate: deleteNotice } = useDeleteNoticeMutation();
    const { mutate: updateNotice } = useUpdateNoticeMutation();
    const { feed_id, content } = (feeds ?? []).filter(
        ({ feed_id }) => feed_id === `${activeId}`,
    )[0] ?? {
        feed_id: '',
        content: '',
    };
    const contentRef = useRef<HTMLDivElement>(null);

    const onUpdate = () => {
        updateNotice({
            feed_id,
            content: contentRef.current?.innerText,
        });
        return false;
    };

    const onDelete = () => {
        deleteNotice(feed_id);
    };

    return (
        <MainContainer>
            <MainSectionTitle>미리보기</MainSectionTitle>
            <MainBlock>
                <PreviewContent ref={contentRef} contentEditable={isEditing} isEditing={isEditing}>
                    {content}
                </PreviewContent>
                <ButtonBox>
                    <Button onClick={onDelete} size="sm" fill={'border'} className="delete">
                        삭제하기
                    </Button>
                    <Button
                        onClick={() => setIsEditing((prev) => (prev ? onUpdate() : !prev))}
                        size="sm"
                        fill={'purple'}>
                        {isEditing && content ? '수정완료' : '수정하기'}
                    </Button>
                </ButtonBox>
            </MainBlock>
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
    width: 100%;
    height: 100%;
    min-height: 0;
    display: flex;
    border-radius: 16px;
    flex-direction: column;
`;

const ButtonBox = styled.div`
    display: flex;
    margin-top: 12px;
    justify-content: flex-end;
    gap: 8px;
    .delete {
        border: 0.5px solid ${({ theme }) => theme.colors.gray400};
        > div {
            color: ${({ theme }) => theme.colors.gray600};
        }
        &:hover {
            background-color: transparent;
            border: 0.5px solid ${({ theme }) => theme.colors.red200};
            > div {
                color: ${({ theme }) => theme.colors.red400};
            }
        }
    }
`;

const PreviewContent = styled.div<{ isEditing: boolean }>`
    margin-top: 8px;
    height: 80%;
    overflow-y: auto;
    padding: 12px;
    white-space: pre-wrap;
    outline: none;
    background-color: ${({ theme, isEditing }) =>
        isEditing ? theme.colors.purple50 : theme.colors.gray100};
`;

export default NoticePreview;
