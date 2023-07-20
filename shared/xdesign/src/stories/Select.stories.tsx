import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Select } from '../components';

export default {
    title: 'components/Select',
    component: Select,
};

const items = ['선택1', '선택2', '선택3', '선택4', '선택 오버플로우 상태'] as const;

type item = typeof items[number];

export const Default = () => {
    const [state, setState] = useState<item | ''>('');
    return (
        <>
            <h1>value :{state}</h1>
            <Select items={items} placeholder="선택하세요" onChange={setState} />
        </>
    );
};

export const PreValueSet = () => {
    const [state, setState] = useState<item>('선택3');
    return (
        <>
            <h1> value: {state}</h1>
            <Select items={items} placeholder="선택하세요" value={'선택3'} onChange={setState} />
        </>
    );
};

export const Direction = () => {
    const [state, setState] = useState<item | ''>('');
    return (
        <>
            <h1>direction</h1>
            <Wrapper>
                <DivWrapper>
                    <h3>right</h3>
                    <Select
                        items={items}
                        overflowOptionDirection="right"
                        placeholder="선택하세요"
                        onChange={setState}
                    />
                </DivWrapper>
                <DivWrapper>
                    <h3>center</h3>
                    <Select
                        items={items}
                        overflowOptionDirection="center"
                        placeholder="선택하세요"
                        onChange={setState}
                    />
                </DivWrapper>
                <DivWrapper>
                    <h3>left</h3>
                    <Select
                        items={items}
                        overflowOptionDirection="left"
                        placeholder="선택하세요"
                        onChange={setState}
                    />
                </DivWrapper>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
    display: flex;
`;

const DivWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
`;
