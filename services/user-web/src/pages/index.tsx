import styled from '@emotion/styled';
import type { NextPage } from 'next';
import loginBackground from '../assets/loginBackground.png';
import { Button } from '@semicolondsm/ui';
import xquareLogo from '../assets/xquareLogo.png';
import Image from 'next/image';
import SelectInput from '../components/common/SelectInput';

const Main: NextPage = () => {
    return (
        <LoginContainer>
            <LoginWrapper
                onSubmit={(e) => {
                    e.preventDefault();
                }}>
                <Image src={xquareLogo} width={50} height={50} />
                <InputContainer>
                    <SelectInput
                        inputSize="large"
                        placeholder="아이디를 입력하세요"
                        name="account_id"
                    />
                    <SelectInput
                        inputSize="large"
                        type="password"
                        placeholder="비밀번호를 입력하세요"
                        name="password"
                    />
                </InputContainer>
                <LoginButton fullWidth fill="purple">
                    로그인
                </LoginButton>
            </LoginWrapper>
        </LoginContainer>
    );
};

const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    justify-content: center;
    background-image: url(${loginBackground.src});
    background-size: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const LoginWrapper = styled.form`
    padding: 50px 60px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    box-shadow: 0px 2px 8px rgba(33, 33, 33, 0.25);
    background-color: ${({ theme }) => theme.colors.white};
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 300px;
`;

const LoginButton = styled(Button)`
    border-radius: 4px;
    & div {
        font-weight: 500;
    }
`;

export default Main;
