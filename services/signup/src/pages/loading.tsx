import React from 'react';
import styled from '@emotion/styled';

const loading = () => {
    return (
        <Template>
            <Spinner />
            <LoadingText>계정을 생성하는중입니다.</LoadingText>
        </Template>
    );
};

export default loading;

const Template = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Spinner = styled.div`
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    display: inline-block;
    box-sizing: border-box;

    width: 50px;
    height: 50px;

    border: 5px solid ${({ theme }) => theme.colors.purple100};
    border-top-color: ${({ theme }) => theme.colors.purple500};
    border-radius: 50%;

    animation: spin 0.8s linear infinite;
`;

const LoadingText = styled.div`
    color: ${({ theme }) => theme.colors.gray900};
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;

    margin-top: 40px;
`;
