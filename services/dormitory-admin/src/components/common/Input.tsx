import styled from '@emotion/styled';
import { ChangeEvent } from 'react';

interface InputProps {
    value?: string;
    label?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    placeholder?: string;
}

const Input = ({ value = '', onChange, label, placeholder }: InputProps) => {
    return (
        <InputContainer>
            {label && <InputLabelBox>{label}</InputLabelBox>}
            <InputBox onChange={onChange} value={value} placeholder={placeholder} />
        </InputContainer>
    );
};
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const InputLabelBox = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray900};
    font-weight: 400;
`;

const InputBox = styled.input`
    width: 100%;
    height: 44px;
    border: 1px solid ${({ theme }) => theme.colors.gray300};
    border-radius: 12px;
    color: ${({ theme }) => theme.colors.gray800};
    padding: 10px 16px;
    outline: none;
    font-size: 16px;
    font-weight: 400;
`;
export default Input;
