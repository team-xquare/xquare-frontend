import type { NextPage } from 'next';
import styled from '@emotion/styled';
import MealCard from '../components/MealCard';

const Home: NextPage = () => {
    return (
        <Wrapper>
            <Text>오늘의 메뉴</Text>
            <MealCardWrapper>
                <MealCard />
                <MealCard />
                <MealCard />
            </MealCardWrapper>
        </Wrapper>
    );
};

export default Home;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    width: 100%;
    height: 900px;
`;

const Text = styled.span`
    font-size: 50px;
    font-weight: 600;
`;

const MealCardWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1000px;
`;
