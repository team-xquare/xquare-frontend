import type { NextPage } from 'next';
import Head from 'next/head';
import styled from '@emotion/styled';
import { Subtitle3, Subtitle4, Body2, Button } from '@semicolondsm/ui';
import ApplyCard from '../components/base/ApplyCard';
import { useState } from 'react';
import MainPageTemplate from '../components/templates/MainPageTemplate';
const Home: NextPage = () => {
    const [select, setSelect] = useState<boolean>(false);
    return (
        <MainPageTemplate
            title="자습실 신청"
            subTitle="연장학습을 하고싶은 자습실을 선택해 주세요.">
            <ApplyCardList>
                <ApplyCard></ApplyCard>
                <ApplyCard></ApplyCard>
                <ApplyCard></ApplyCard>
                <ApplyCard></ApplyCard>
                <ApplyCard></ApplyCard>
                <ApplyCard></ApplyCard>
                <ApplyCard></ApplyCard>
                <ApplyCard></ApplyCard>
                <ApplyCard></ApplyCard>
                <ApplyCard></ApplyCard>
            </ApplyCardList>
            <ApplyButton fill="purple" size="lg" fullWidth>
                신청하기
            </ApplyButton>
        </MainPageTemplate>
    );
};

const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    padding: 0 16px 16px;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const SectionTitle = styled(Subtitle3)`
    width: 100%;
    padding: 10px 0;
`;

const SectionDescription = styled(Body2)`
    padding-bottom: 16px;
`;

const ApplyCardList = styled.section`
    flex-direction: column;
    flex: 1;
    overflow: auto;
    overflow-y: scroll;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const ApplyButton = styled(Button)`
    border-radius: 12px;
`;

export default Home;
