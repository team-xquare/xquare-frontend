import styled from '@emotion/styled';

const Input = styled.input`
    width: 160px;
    height: 36px;
    border: none;
    box-sizing: border-box;
    padding: 0 16px;
    background: ${({ theme }) => theme.colors.gray100};

    &::placeholder {
        color: ${({ theme }) => theme.colors.gray500};
    }
`;

export default Input;
