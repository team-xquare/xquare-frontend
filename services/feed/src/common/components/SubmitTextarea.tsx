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
    width: 100%;
    padding: 8px 16px;
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const RelativeBox = styled.div`
    display: flex;
    width: 100%;
    padding: 10px 16px;
    border: 1px solid ${({ theme }) => theme.colors.gray500};
    border-radius: 8px;
    gap: 12px;
`;

const CustomTextarea = styled(Textarea)`
    outline: none;
    flex: 1;
    resize: none;
    font-size: 16px;
    padding: 0;
    border: none;
    color: ${({ theme }) => theme.colors.gray900};
`;

const SubmitButton = styled.div<{ disable: boolean }>`
    width: fit-content;
    display: flex;
    align-items: flex-end;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
    color: ${({ theme, disable }) => (disable ? theme.colors.purple50 : theme.colors.purple500)};
`;

export default SubmitTextarea;
