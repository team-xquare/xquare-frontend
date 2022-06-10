import styled from '@emotion/styled';

const Input = styled.input<{ fullWidth?: boolean }>`
    border: 1px solid rgba(255, 255, 255, 0.11);
    color: ${({ theme }) => theme.colors.gray900};
    background-color: rgba(255, 255, 255, 0.06);
    border-radius: 4px;
    padding: 8px 16px;
    outline: none;
    width: ${({ fullWidth }) => fullWidth && '100%'};
`;

export default Input;
