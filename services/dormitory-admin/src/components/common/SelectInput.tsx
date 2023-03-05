import styled from '@emotion/styled';

const SelectInput = styled.input`
    padding: 0 12px;
    height: 36px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.gray200};
    outline: none;

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
