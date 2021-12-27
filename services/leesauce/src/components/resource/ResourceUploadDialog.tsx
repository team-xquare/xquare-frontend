import styled from '@emotion/styled';
import { Body1, Button, Select } from '@semicolondsm/ui';
import { useEffect, useState } from 'react';
import { STATIC_URL } from '../../configs';
import { ResourceFormData, ResourceType } from '../../models';
import useInput from '../../hooks/useInput';
import { CloseIco } from '../../static/svg';
import { copyToClibboard } from '../../utils/functions';
import Input from '../common/Input';
import { useCreateResourceMutation } from '../../services/resource';

interface ResourceUploadDialogProps extends ResourceFormData {
    onClose: () => void;
}
const ResourceUploadDialog = ({ name: defaultName, file, onClose }: ResourceUploadDialogProps) => {
    const [imagePreview, setImagePreview] = useState('');
    const [name, onChangeNameHandler] = useInput(defaultName);
    const [category, setCategory] = useState<ResourceType>();
    const [createResource, { isSuccess, isError, isLoading }] = useCreateResourceMutation();

    const isValid = () => {
        return name && category ? true : false;
    };
    const previewURL = isValid()
        ? `${STATIC_URL}/${category}/${name}.${file.type.split('image/')[1]}`
        : '';

    useEffect(() => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result?.toString() || '');
        };
        reader.readAsDataURL(file);
    }, [file]);

    const onUpload = async () => {
        const fd = new FormData();
        fd.append('name', name);
        fd.append('file', file);
        createResource({ resource: fd, type: 'logo' });
    };

    useEffect(() => {
        isSuccess && onClose();
    }, [isSuccess]);

    return (
        <UploadDialogBlock>
            <Top>
                <Body1 fontWeight="medium" color="gray800">
                    New Sauce
                </Body1>
                <div className="close-btn" onClick={onClose}>
                    <CloseIco />
                </div>
            </Top>
            <Bottom>
                <ImageInfo>
                    <img src={imagePreview} alt="이미지 미리보기" />
                    <InputWrapper>
                        <Input
                            type="text"
                            onClick={() => copyToClibboard(previewURL)}
                            placeholder="Preview URL"
                            value={previewURL}
                            readOnly
                        />
                        <Input
                            type="text"
                            onChange={onChangeNameHandler}
                            placeholder="Source Name"
                            defaultValue={previewURL}
                        />

                        <Select<ResourceType>
                            items={['icon', 'logo']}
                            onChange={setCategory}
                            placeholder="Category"
                        />
                    </InputWrapper>
                </ImageInfo>
                <Button
                    size="sm"
                    disabled={!isValid()}
                    fill={'purple'}
                    onClick={onUpload}
                    loading={isLoading}>
                    upload
                </Button>
            </Bottom>
        </UploadDialogBlock>
    );
};

export default ResourceUploadDialog;

const UploadDialogBlock = styled.div`
    width: 400px;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
`;

const Top = styled.div`
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 16px 0;
    box-sizing: border-box;
    & .close-btn {
        position: absolute;
        right: 24px;
        width: 24px;
        height: 24px;
        position: absolute;
        cursor: pointer;
    }
`;

const Bottom = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
`;

const ImageInfo = styled.div`
    padding-top: 28px;
    padding-bottom: 36px;
    width: 100%;
    justify-content: space-evenly;
    display: flex;
    align-items: center;
    & img {
        width: 160px;
        height: 160px;
        background-color: ${({ theme }) => theme.colors.gray100};
    }
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    & select {
        color: ${({ theme }) => theme.colors.gray500};
    }
`;
