import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@semicolondsm/ui';
import error from '../assets/error.png';
import { useRouter } from 'next/router';
import BottomFixedButton from '../components/BottomFixedButton';

const complete = () => {
    const router = useRouter();
    return (
        <Template>
            <img src={error.src} />
            <Title>회원가입 실패</Title>
            <Body>XQUARE 회원가입을 실패하였습니다. </Body>
            <BottomFixedButton fill="purpleLight" onClick={() => router.push('/signup')}>
                돌아가기
            </BottomFixedButton>
        </Template>
    );
};

const Template = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 16px;
`;

const Title = styled.div`
    font-family: 'Spoqa Han Sans Neo' !important;
    font-size: 24px;
    font-weight: 500;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.black};

    margin-top: 36px;
`;

const Body = styled.div`
    font-family: 'Spoqa Han Sans Neo' !important;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    color: #898d90;

    margin-top: 11px;
`;

const CustomButton = styled(Button)`
    margin-top: 48px;
`;

export default complete;
