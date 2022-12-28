import styled from '@emotion/styled';
import TextareaAutosize from 'react-textarea-autosize';
import { FlexCol } from '../common/components/Flexbox';
import ImageDeleteContainer from '../common/components/image/imageDeleteContainer';
import UploadFooter from '../write/UploadFooter';
import WriteDropdownBox from '../write/WriteDropdownsBox';
import { useBridgeHandler } from '@shared/xbridge';
import { useState } from 'react';

const Write = () => {
    const [pickedImage, setPickedImage] = useState<string[]>([
        'https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E',
    ]);
    const onImageSelect = useBridgeHandler(
        'photoPicker',
        (e) => setPickedImage([...pickedImage, ...e.detail.photos]),
        {},
    );

    const onDeleteImage = (imageState: string[], deleteIdx: number) => {
        return imageState.filter((_, idx) => idx !== deleteIdx);
    };

    return (
        <>
            <WriteContainer>
                <WriteDropdownBox />
                <TextareaContainer
                    minRows={5}
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
