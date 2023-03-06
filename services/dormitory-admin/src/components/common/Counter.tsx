import styled from '@emotion/styled';
import { Dispatch, SetStateAction } from 'react';
import { Button, Body2 } from '@semicolondsm/ui';
import SelectInput from './SelectInput';

interface CounterProps {
    num: number;
    setNum: Dispatch<SetStateAction<number>>;
    label: string;
}

const Counter = ({ num, setNum, label }: CounterProps) => {
    return (
        <Wrapper>
            <Body2 fontWeight="medium" color="gray700">
                {label}
            </Body2>
            <CounterContainer>
                <CounterButton size="sm" onClick={() => setNum((number) => number - 1)}>
                    -
                </CounterButton>
                <CustomInput type="text" value={num} readOnly />
                <CounterButton size="sm" onClick={() => setNum((number) => number + 1)}>
                    +
                </CounterButton>
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

const CounterButton = styled(Button)`
    flex: 1;
    justify-content: center;

    & div {
        font-weight: 500;
    }
`;

const CustomInput = styled(SelectInput)`
    width: 120px;
    text-align: center;
`;

export default Counter;
