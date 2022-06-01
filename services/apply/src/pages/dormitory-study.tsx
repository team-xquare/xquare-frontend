import type { NextPage } from 'next';
import Head from 'next/head';
import styled from '@emotion/styled';
import { Subtitle3, Subtitle4, Body2, Button } from '@semicolondsm/ui';
import ApplyCard from '../components/base/ApplyCard';
import { useState } from 'react';
import MainPageTemplate from '../components/templates/MainPageTemplate';
import ButtomFixedButton from '../components/templates/ButtomFixedButton';
const DormitoryStudy: NextPage = () => {
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
            <ButtomFixedButton />
        </MainPageTemplate>
    );
};

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

export default DormitoryStudy;
