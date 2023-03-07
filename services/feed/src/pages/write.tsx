import styled from '@emotion/styled';
import TextareaAutosize from 'react-textarea-autosize';
import { FlexCol } from '../common/components/Flexbox';
import ImageDeleteContainer from '../common/components/image/imageDeleteContainer';
import UploadFooter from '../write/components/UploadFooter';
import WriteDropdownBox from '../write/components/WriteDropdownsBox';
import { useBridgeHandler } from '@shared/xbridge';
import { useEffect, useState } from 'react';
import useCategoryList from '../common/hooks/useCategoryList';
import { CategoryType } from '../common/types';
import usePermissions from '../write/hooks/usePermissions';
import { sendBridgeEvent, useBridgeCallback } from '@shared/xbridge';
import useAddFeed from '../write/hooks/useAddFeed';
import WriteButton from '../main/components/WriteButton';
export type DropdownType = 'group' | 'purpose';

const Write = () => {
    const [pickedImage, setPickedImage] = useState<string[]>([]);
    const [content, setContent] = useState('');
    const [selectState, setSelectState] = useState<Record<DropdownType, CategoryType>>({
        group: { category_id: '', name: '권한이 존재하지 않음', key: '' },
        purpose: { category_id: '', name: '목록이 존재하지 않음', key: '' },
    });
    const { data: purpose } = useCategoryList();
    const { data: group } = usePermissions(selectState.purpose.key);

    useEffect(() => {
        sendBridgeEvent('isRightButtonEnabled', {
            isEnabled: (!!content || !!pickedImage.length) && !!selectState.group.name,
        });
    }, [!!content, selectState.group.name, !!pickedImage.length]);

    const { mutate: addFeedMutate } = useAddFeed(selectState.purpose.category_id);

    useBridgeCallback(
        'rightButtonTaped',
        () => {
            addFeedMutate({
                category_id: selectState.purpose.category_id,
                type: selectState.group.name,
                content: content,
                title: '1234',
                fileBase64Arr: pickedImage,
            });
        },
        undefined,
    );

    useEffect(() => {
        setSelectState((state) => ({ ...state, purpose: { ...state.purpose, ...purpose?.[0] } }));
    }, [purpose]);

    useEffect(() => {
        setSelectState((state) => ({
            ...state,
            group: {
                ...state.group,
                category_id: group?.[0]?.authority_id || '',
                name: group?.[0]?.authority_name || '',
            },
        }));
    }, [selectState.purpose, group]);

    const onImageSelect = useBridgeHandler(
        'photoPicker',
        (e) => setPickedImage((state) => [...state, ...e.detail.photos]),
        {},
    );

    const onDeleteImage = (imageState: string[], deleteIdx: number) => {
        return imageState.filter((_, idx) => idx !== deleteIdx);
    };

    return (
        <>
            <WriteContainer>
                <WriteDropdownBox selectState={selectState} setSelectState={setSelectState} />
                <TextareaContainer
                    minRows={5}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    spellCheck="false"
                    placeholder="내용을 입력하세요."
                />
                <ImageDeleteContainer
                    images={pickedImage}
                    onDelete={(deleteIdx) =>
                        setPickedImage((state) => onDeleteImage(state, deleteIdx))
                    }
                />
            </WriteContainer>
            <UploadFooter onClick={onImageSelect} />
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
