import type { NextPage } from 'next';
import { Button } from '@semicolondsm/ui';
import styled from '@emotion/styled';
import Logo from '../assets/logo.png';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
    const router = useRouter();
    return (
        <Template>
            <Background>
                <img src={Logo.src} alt="xquaer-logo" />
            </Background>
            <ButtonWrapper>
                <CustomButton fill="purple" fullWidth onClick={() => router.push('/signup')}>
                    회원가입 하러가기
                </CustomButton>
            </ButtonWrapper>
        </Template>
    );
};

const Template = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    gap: 64px;
`;

const Background = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 461px;

    background-color: #9550f9;
    background-color: ${({ theme }) => theme.colors.purple400};
`;

const ButtonWrapper = styled.div`
    width: 100%;

    padding: 0px 16px;
`;

const CustomButton = styled(Button)`
    border-radius: 8px;
`;

export default Home;
