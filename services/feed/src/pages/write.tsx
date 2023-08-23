import styled from '@emotion/styled';
import TextareaAutosize from 'react-textarea-autosize';
import { FlexCol } from '../common/components/Flexbox';
import ImageDeleteContainer from '../common/components/image/imageDeleteContainer';
import UploadFooter from '../write/components/UploadFooter';
import WriteDropdownBox from '../write/components/WriteDropdownsBox';
import { useBridgeHandler } from '@shared/xbridge';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { sendBridgeEvent, useBridgeCallback } from '@shared/xbridge';
import useAddFeed, { AddFeedParam } from '../write/hooks/useAddFeed';
import WriteButton from '../main/components/WriteButton';

const Write = () => {
    const [newFeedInfo, setNewFeedInfo] = useState<AddFeedParam>({
        category_id: '',
        content: '',
        fileBase64Arr: [],
        title: '12345',
        authorityType: '',
    });

    useEffect(() => {
        sendBridgeEvent('isRightButtonEnabled', {
            isEnabled: !!newFeedInfo.content && !!newFeedInfo.authorityType,
        });
    }, [!!newFeedInfo.content, !!newFeedInfo.authorityType]);

    const { mutate: addFeedMutate } = useAddFeed();

    const writeConfirm = useBridgeHandler(
        'confirm',
        (e) => {
            e.detail.success && addFeedMutate(newFeedInfo);
        },
        {
            cancelText: '취소하기',
            confirmText: '작성하기',
            message: '게시물을 등록하시겠습니까?',
        },
    );

    useBridgeCallback(
        'rightButtonTaped',
        () => {
            writeConfirm();
        },
        undefined,
    );

    const onImageSelect = useBridgeHandler(
        'photoPicker',
        (e) =>
            setNewFeedInfo((state) => ({
                ...state,
                fileBase64Arr: [...state.fileBase64Arr, ...e.detail.photos],
            })),
        {},
    );

    const onDeleteImage = (imageState: string[], deleteIdx: number) => {
        return imageState.filter((_, idx) => idx !== deleteIdx);
    };

    const onChangeInput = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewFeedInfo((state) => ({ ...state, content: e.target.value }));
    }, []);

    return (
        <>
            <WriteContainer>
                <WriteDropdownBox setNewFeedInfo={setNewFeedInfo} />
                <TextareaContainer
                    minRows={5}
                    onChange={onChangeInput}
                    spellCheck="false"
                    placeholder="내용을 입력하세요."
                />
                <ImageDeleteContainer
                    images={newFeedInfo.fileBase64Arr}
                    onDelete={(deleteIdx) =>
                        setNewFeedInfo((state) => ({
                            ...state,
                            fileBase64Arr: onDeleteImage(state.fileBase64Arr, deleteIdx),
                        }))
                    }
                />
            </WriteContainer>
            <UploadFooter onClick={onImageSelect} />
            {process.env.NODE_ENV === 'development' && (
                <WriteButton
                    onClick={() => {
                        addFeedMutate(newFeedInfo);
                    }}
                />
            )}
        </>
    );
};

const WriteContainer = styled(FlexCol)`
    width: 100%;
`;

const TextareaContainer = styled(TextareaAutosize)`
    padding: 0 16px 20px;
    width: 100%;
    border: none;
    outline: none;
    resize: none;
    caret-color: ${({ theme }) => theme.colors.purple400};
    color: ${({ theme }) => theme.colors.gray800};
    font-size: 16px;
`;

export default Write;
