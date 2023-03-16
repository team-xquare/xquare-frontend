import React from 'react';
import styled from '@emotion/styled';
import check from '../assets/check.png';

const complete = () => {
    return (
        <Template>
            <img src={check.src} />
            <Title>회원가입 완료</Title>
            <Body>XQUARE 회원가입이 완료되었습니다.</Body>
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

export default complete;
