import styled from '@emotion/styled';
import { ChangeEvent } from 'react';
import Textarea from 'react-textarea-autosize';

interface SubmitTextareaProps {
    placeholder?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmit?: () => void;
}

const SubmitTextarea = ({ placeholder, onChange, onSubmit, value }: SubmitTextareaProps) => {
    return (
        <FixedBox>
            <RelativeBox>
                <CustomTextarea
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    maxRows={3}
                />
                <SubmitButton disable={!value} onClick={() => !!value && onSubmit?.()}>
                    등록
                </SubmitButton>
            </RelativeBox>
        </FixedBox>
    );
};

const FixedBox = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 8px 16px;
    background-color: ${({ theme }) => theme.colors.gray50};
`;

const RelativeBox = styled.div`
    position: relative;
    width: 100%;
`;

const CustomTextarea = styled(Textarea)`
    width: 100%;
    border-radius: 8px;
    outline: none;
    resize: none;
    border: 1px solid ${({ theme }) => theme.colors.gray500};
    padding: 10px 16px;
    color: ${({ theme }) => theme.colors.gray900};
`;

const SubmitButton = styled.div<{ disable: boolean }>`
    position: absolute;
    right: 12px;
    bottom: 10px;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
    color: ${({ theme, disable }) => (disable ? theme.colors.purple50 : theme.colors.purple500)};
`;

export default SubmitTextarea;
