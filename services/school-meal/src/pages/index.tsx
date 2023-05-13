import type { NextPage } from 'next';
import styled from '@emotion/styled';
import MealCard from '../main/components/MealCard';
import dateFormat from '../utils/function/dateFormat';
import dayjs from 'dayjs';

const Home: NextPage = () => {
    const date = dayjs();
    
    console.log(date.add(1, 'day').format('YYYY-MM-DD'));

    return (
        // <Wrapper>
        //     <Text size={50} weight={600}>
        //         오늘의 메뉴
        //     </Text>
        //     <Text size={25} weight={500}>
        //         2023년 05월 12일
        //     </Text>
        //     <MealCardWrapper>
        //         <MealCard />
        //         <MealCard />
        //         <MealCard />
        //     </MealCardWrapper>
        // </Wrapper>
        <div>asdf</div>
    );
};

export default Home;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    min-height: 100vh;
    background: #f0e6ff;
`;

const Text = styled.span<{ size: number; weight: number }>`
    font-size: ${({ size }) => size}px;
    font-weight: ${({ weight }) => weight};
`;

const MealCardWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1000px;
    height: 500px;
`;
