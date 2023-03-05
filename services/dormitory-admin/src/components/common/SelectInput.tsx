import styled from '@emotion/styled';

const SelectInput = styled.input`
    padding: 0 12px;
    height: 36px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.gray400};
    outline: none;
    background: ${({ theme }) => theme.colors.gray50};
`;
export default SelectInput;
