import styled from '@emotion/styled';
import { Dispatch, SetStateAction } from 'react';

interface CounterProps {
    num: number;
    setNum: Dispatch<SetStateAction<number>>;
    label: string;
}

const Counter = ({ num, setNum, label }: CounterProps) => {
    return (
        <Wrapper>
            <CounterLabelBox>{label}</CounterLabelBox>
            <CounterContainer>
                <CounterButton onClick={() => setNum((number) => number - 1)}>-</CounterButton>
                <DisplayBox>{num}</DisplayBox>
                <CounterButton onClick={() => setNum((number) => number + 1)}>+</CounterButton>
            </CounterContainer>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 8px;
`;

const CounterContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 8px;
    height: 36px;
`;

const CounterButton = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.gray300};
`;

const DisplayBox = styled.div`
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.gray300};
`;

const CounterLabelBox = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray900};
    font-weight: 400;
`;

export default Counter;
