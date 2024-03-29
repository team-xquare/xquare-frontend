import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import NoticeList from './NoticeList';
import NoticePreview from './NoticePreview';
import NoticeCommentList from './NoticeCommentList';
import ModalContainer from '../common/ModalContainer';
import { useModal } from '../../contexts/modal';
import { Button } from '@semicolondsm/ui';
import { useAddNoticeMutation } from '../../apis/notices';
import SelectInput from '../common/SelectInput';
const NoticeLayout = () => {
    const [activeId, setActiveId] = useState<string | null>(null);
    const { mutate: addNotice } = useAddNoticeMutation();
    const { closeModal } = useModal();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onSubmit = () => {
        addNotice({ title, content });
        setTitle('');
        setContent('');
        closeModal();
    };

    return (
        <NoticeContainer>
            <ModalContainer>
                <Box>
                    <SelectInput
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="제목"
                    />
                    <Textarea
                        as="textarea"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="내용"></Textarea>
                    <ButtonWrapper>
                        <Button size="sm" fill="border" onClick={closeModal}>
                            닫기
                        </Button>
                        <Button disabled={!title} size="sm" fill="purple" onClick={onSubmit}>
                            만들기
                        </Button>
                    </ButtonWrapper>
                </Box>
            </ModalContainer>
            <NoticeList activeId={activeId} setActiveId={setActiveId} />
            <NoticePreview activeId={activeId} />
            <NoticeCommentList activeId={activeId} />
        </NoticeContainer>
    );
};

const NoticeContainer = styled.section`
    width: 100%;
    height: 100%;
    padding: 74px 60px 0 60px;
    display: grid;
    grid-template-columns: 700px minmax(400px, 1fr);
    grid-template-rows: 3fr 2fr 0px;
    grid-gap: 40px;
    overflow-x: auto;
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 12px;
`;

const Input = styled.input`
    outline: none;
    width: 400px;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors.gray200};
    padding: 8px 14px;
    font-size: 16px;
`;

const Textarea = styled(SelectInput)`
    width: 400px;
    height: 300px;
    resize: vertical;
    padding: 12px;
    outline: none;
`;

const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;

    justify-content: flex-end;
    //BODY 1 추가
`;

export default NoticeLayout;
