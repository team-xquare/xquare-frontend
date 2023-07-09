import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface SelectInputProps {
    inputSize?: 'small' | 'medium' | 'large';
}

const SelectInput = styled.input<SelectInputProps>`
    padding: 0 12px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.gray200};
    outline: none;

    ${({ inputSize = 'medium' }) => {
        switch (inputSize) {
            case 'small':
                return css`
                    height: 24px;
                    font-size: 12px;

                    &::placeholder {
                        font-size: 12px;
                    }
                `;
            case 'medium':
                return css`
                    height: 36px;
                    font-size: 14px;

                    &::placeholder {
                        font-size: 13px;
                    }
                `;
            case 'large':
                return css`
                    height: 48px;
                    font-size: 14px;

                    &::placeholder {
                        font-size: 14px;
                    }
                `;
        }
    }}

    transition: 0.15s;

    &::placeholder {
        color: ${({ theme }) => theme.colors.gray400};
    }

    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.gray300};
        box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.purple100};
    }
`;
export default SelectInput;
