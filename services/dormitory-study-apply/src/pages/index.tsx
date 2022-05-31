import type { NextPage } from 'next';
import Head from 'next/head';
import styled from '@emotion/styled';
import { Subtitle3, Subtitle4, Body2, Button } from '@semicolondsm/ui';
import ApplyCard from '../components/base/ApplyCard';
import { useState } from 'react';
const Home: NextPage = () => {
    const [select, setSelect] = useState<boolean>(false);
    return (
        <Wrapper>
            <SectionTitle fontWeight="bold" color="gray900">
                자습실 신청
            </SectionTitle>
            <SectionDescription fontWeight="medium" color="gray700">
                연장학습을 하고싶은 자습실을 선택해 주세요.
            </SectionDescription>
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
            <ApplyButton fill="purple" size="lg">
                버튼
            </ApplyButton>
        </Wrapper>
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
    font-size: 16px;
    font-weight: 400;
    color: white;
`;

export default Home;
