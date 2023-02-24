import styled from '@emotion/styled';
import TextareaAutosize, { TextareaAutosizeProps } from 'react-textarea-autosize';

const Textarea = (props: TextareaAutosizeProps) => {
    return <CustomTextarea {...props} />;
};

const CustomTextarea = styled(TextareaAutosize)`
    width: 100%;
    resize: none;
    padding: 12px 16px;
    border: none;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.gray100};
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.gray800};
`;
export default Textarea;
