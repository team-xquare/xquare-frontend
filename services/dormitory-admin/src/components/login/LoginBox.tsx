import styled from '@emotion/styled';

const LoginBox = () => {
    return <LoginWrapper></LoginWrapper>;
};

const LoginWrapper = styled.div`
    border-radius: 12px;
    box-shadow: 0px 2px 8px rgba(33, 33, 33, 0.25);
    background-color: ${({ theme }) => theme.colors.white};
`;

export default LoginBox;
