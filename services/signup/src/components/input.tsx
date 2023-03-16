import { Theme } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ChangeEvent } from 'react';

type InputType = 'text' | 'password';

interface InputProps {
    label: string;
    placeholder: string;
    name?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    borderColor?: keyof Theme['colors'];
    type?: InputType;
}

const input = ({
    label,
    placeholder,
    name,
    onChange,
    value,
    borderColor = 'gray300',
    type = 'text',
}: InputProps) => {
    return (
        <Container>
            <label>
                <InputLabel>
                    {label}
                    <Required>*</Required>
                </InputLabel>
                <Input
                    type={type}
                    borderColor={borderColor}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required
                />
            </label>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

    margin-top: 20px;
`;

const Required = styled.span`
    color: ${({ theme }) => theme.colors.red400};
`;

const InputLabel = styled.div`
    color: ${({ theme }) => theme.colors.gray900};
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
`;

const Input = styled.input<{ borderColor: keyof Theme['colors'] }>`
    width: 100%;
    height: 44px;

    margin-top: 8px;

    border: 1px solid ${({ theme, borderColor }) => theme.colors[borderColor]};
    border-radius: 8px;

    background-color: ${({ theme }) => theme.colors.gray50};

    padding-left: 16px;

    font-size: 16px;
    font-weight: 400;
    line-height: 24px;

    &::placeholder {
        color: ${({ theme }) => theme.colors.gray300};
    }
`;

export default input;
