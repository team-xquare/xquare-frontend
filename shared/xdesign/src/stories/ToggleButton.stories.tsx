import styled from '@emotion/styled';
import * as React from 'react';
import { Body1, Title3 } from '../components';
import { ToggleButtonProps, ToggleButton } from '../components/ToggleButton';
export default { title: 'components/ToggleButton', component: ToggleButton };

export const Default: React.FC<ToggleButtonProps> = () => {
    const [page, setPage] = React.useState(1);
    return (
        <Wrapper>
            <Title3>Toggle Button</Title3>
            <ToggleButton
                defaultValue={1}
                items={[
                    {
                        title: '버튼1',
                        onClick: () => setPage(1),
                    },
                    {
                        title: '버튼2',
                        onClick: () => setPage(2),
                    },
                    {
                        title: '버튼3',
                        onClick: () => setPage(3),
                    },
                ]}
            />
            <Body1>{page}page</Body1>
        </Wrapper>
    );
};

export const Items = () => {
    return (
        <Wrapper>
            <Title3>Items</Title3>
            <ToggleButton
                defaultValue={1}
                items={[
                    {
                        title: '버튼1',
                    },
                    {
                        title: '버튼2',
                    },
                ]}
            />
            <ToggleButton
                defaultValue={1}
                items={[
                    {
                        title: '버튼1',
                    },
                    {
                        title: '버튼2',
                    },
                    {
                        title: '버튼3',
                    },
                ]}
            />
            <ToggleButton
                defaultValue={1}
                items={[
                    {
                        title: '버튼1',
                    },
                    {
                        title: '버튼2',
                    },
                    {
                        title: '버튼3',
                    },
                    {
                        title: '버튼4',
                    },
                ]}
            />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
`;
