import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import MainSectionTitle from '../common/MainSectionTitle';
import { Button, Subtitle3 } from '@semicolondsm/ui';
import {
    useDeleteNoticeMutation,
    useNoticeQuery,
    useUpdateNoticeMutation,
} from '../../apis/notices';
import BlockContainer from '../common/BlockContainer';

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

    useEffect(() => {
        setIsEditing(false);
    }, [activeId]);
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
            <BlockContainer title="미리보기">
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

const ButtonBox = styled.div`
    width: 100%;
    display: flex;
    padding: 12px;
    justify-content: flex-end;
    gap: 8px;
    border-top: 1px solid ${({ theme }) => theme.colors.gray100};
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
    width: 100%;
    height: 80%;
    overflow-y: auto;
    padding: 24px;
    white-space: pre-wrap;
    outline: none;
    background-color: ${({ theme, isEditing }) =>
        isEditing ? theme.colors.purple50 : theme.colors.white};
`;

export default NoticePreview;
