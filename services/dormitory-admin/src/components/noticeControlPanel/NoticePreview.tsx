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
                <PreviewFlexBox>
                    <PreviewFlexBox>
                        <Button
                            onClick={() => setIsEditing((prev) => (prev ? onUpdate() : !prev))}
                            size="sm">
                            {isEditing && content ? '수정완료' : '수정하기'}
                        </Button>
                        <Button onClick={onDelete} size="sm">
                            삭제하기
                        </Button>
                    </PreviewFlexBox>
                </PreviewFlexBox>
                <PreviewContent ref={contentRef} contentEditable={isEditing}>
                    {content}
                </PreviewContent>
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
    padding: 16px 20px;
    display: flex;
    border-radius: 12px;
    flex-direction: column;
    background: ${(props) => props.theme.colors.gray200};
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

const PreviewContent = styled.div`
    margin-top: 20px;
    height: 100%;
    overflow-y: auto;
    white-space: pre-wrap;
`;

export default NoticePreview;
