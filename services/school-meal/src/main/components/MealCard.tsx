import React from 'react';
import styled from '@emotion/styled';

const MealCard = () => {
    return (
        <MealCardWrapper>
            <MealContent height={50} size={25}>
                아침
            </MealContent>
            <MealContent height={40} size={20}>
                밥밥밥밥밥밥
            </MealContent>
            <MealContent height={40} size={20}>
                국국국국국국국국
            </MealContent>
            <MealContent height={40} size={20}>
                반찬11111111111
            </MealContent>
            <MealContent height={40} size={20}>
                반찬2222222
            </MealContent>
            <MealContent height={40} size={20}>
                반창3333333333
            </MealContent>
            <MealContent height={40} size={20}>
                특싱이당!
            </MealContent>
            <MealContent height={40} size={20}>
                칼로리당..
            </MealContent>
        </MealCardWrapper>
    );
};

export default MealCard;

const MealCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 250px;
    height: 380px;
    border-radius: 10px;
    background-color: white;
    box-shadow: rgba(50, 50, 93, 0.4) 0px 2px 5px -1px, rgba(0, 0, 0, 0.55) 0px 1px 3px -1px;
    transition: 0.4s;
    &:hover {
        width: 300px;
        height: 456px;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 19px 38px, rgba(0, 0, 0, 0.11) 0px 15px 12px;
    }
`;

const MealContent = styled.div<{ height: number; size: number }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: ${({ height }) => height}px;
    font-size: ${({ size }) => size}px;
`;
