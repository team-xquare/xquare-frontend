import styled from '@emotion/styled';
import { Button } from '@semicolondsm/ui';
import { FormEvent } from 'react';

const LoginLayout = () => {
    const login = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    }

    return (
        <LoginContainer>
            <LoginForm onSubmit={login}>
                <Input type="text" placeholder="ID" />
                <Input type="password" placeholder="Password" />
                <Button fullWidth>Login</Button>
            </LoginForm>
        </LoginContainer>
    );
};

const LoginContainer = styled.div`
    width: 100%;
    height: 100%;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LoginForm = styled.form`
    width: 500px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 12px;
`;

const Input = styled.input`
    width: 100%;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors.gray200};
    padding: 8px 14px;
    font-size: 16px;
`;

export default LoginLayout;