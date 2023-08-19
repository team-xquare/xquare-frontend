import { Switch } from '.';
import { useState } from 'react';

export default {
    title: 'components/Switch',
    component: Switch,
};

export const Default = () => {
    const [isOn1, setIsOn1] = useState<boolean>(false);
    const [isOn2, setIsOn2] = useState<boolean>(false);

    return (
        <>
            <h3>{`${isOn1}`}</h3>
            <Switch isOn={isOn1} onClick={() => setIsOn1(!isOn1)} isActive={true} />
            <br />
            <h3>비활성화되었을 시 40%의 alpha 값을 가집니다.</h3>
            <Switch isOn={isOn2} onClick={() => setIsOn2(!isOn2)} isActive={false} />
            <br />
            <Switch isOn={!isOn2} onClick={() => setIsOn2(!isOn2)} isActive={false} />
        </>
    );
};
