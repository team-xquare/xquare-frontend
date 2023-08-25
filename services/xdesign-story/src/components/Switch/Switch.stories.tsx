import styled from '@emotion/styled';
import { useRef, useState } from 'react';
import { Switch } from '.';

export default {
    title: 'Components/Switch',
    component: Switch,
};

const Background = styled.div`
    display: flex;
`;

export const Default: React.VFC = () => {
    const [isOn, setIsOn] = useState<boolean>(false);
    const ref = useRef(null);
    const onClick = () => {
        setIsOn(!isOn);
    };

    return (
        <Background>
            <Switch isOn={isOn} onClick={onClick} disabled={false} ref={ref} />
            <Switch isOn={false} onClick={onClick} disabled={true} />
            <Switch isOn={true} onClick={onClick} disabled={true} />
        </Background>
    );
};
