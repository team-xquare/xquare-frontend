import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import styled from '@emotion/styled';
import { Body2, Body3 } from '@semicolondsm/ui';
import axios from 'axios';

type DirectorDataType = {
    second_floor: string;
    third_floor: string;
    fourth_floor: string;
};

const weekendArr = ['일', '월', '화', '수', '목', '금', '토'];

const Home: NextPage<{ todayDirectorData: DirectorDataType }> = ({ todayDirectorData }) => {
    const { fourth_floor, second_floor, third_floor } = todayDirectorData;
    const todayDate = new Date();

    return (
        <Container>
            <DirectorsBox gap={14}>
                <h3>
                    {todayDate.getMonth() + 1}월 {todayDate.getDate()}일 (
                    {weekendArr[todayDate.getDay()]})
                </h3>
                <FlexCol gap={8}>
                    <FlexRow gap={12}>
                        <Body3>2층</Body3>
                        <Body2>{second_floor} 선생님</Body2>
                    </FlexRow>
                    <FlexRow gap={12}>
                        <Body3>3층</Body3>
                        <Body2>{third_floor} 선생님</Body2>
                    </FlexRow>
                    <FlexRow gap={12}>
                        <Body3>4층</Body3>
                        <Body2>{fourth_floor} 선생님</Body2>
                    </FlexRow>
                </FlexCol>
            </DirectorsBox>
        </Container>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const todayDirectorData = (
        await axios.get<DirectorDataType>('https://stag-api.xquare.app//pick/self-study/today')
    ).data;
    console.log(todayDirectorData);
    return { props: { todayDirectorData } };
};

const Container = styled.div`
    padding: 20px 16px;
`;

interface FlexProps {
    gap?: number;
    align?: string;
    justify?: string;
    fullWidth?: boolean;
}

export const FlexRow = styled.div<FlexProps>`
    width: ${(props) => (props.fullWidth ? '100%' : 'initial')};
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${(props) => (props.gap ? props.gap : 0)}px;
    align-items: ${(props) => (props.align ? props.align : 'center')};
    justify-content: ${(props) => (props.justify ? props.justify : 'flex-start')};
`;

export const FlexCol = styled.div<FlexProps>`
    width: ${(props) => (props.fullWidth ? '100%' : 'initial')};
    display: flex;
    flex-direction: column;
    gap: ${(props) => (props.gap ? props.gap : 0)}px;
    align-items: ${(props) => (props.align ? props.align : 'flex-start')};
    justify-content: ${(props) => (props.justify ? props.justify : 'center')};
`;

const DirectorsBox = styled(FlexCol)`
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.gray100};
    gap: 14px;
    padding: 16px;
    > h3 {
        font-size: 16px;
        line-height: 24px;
        color: ${({ theme }) => theme.colors.gray900};
    }
`;
export default Home;
