import { Switch } from '.';
import { useRef, useState } from 'react';

export default {
    title: 'components/Switch',
    component: Switch,
};

export const Default = () => {
    const [isOn1, setIsOn1] = useState<boolean>(false);
    const ref = useRef<HTMLButtonElement | null>(null);

    return (
        <>
            <h2>Switch</h2>
            <br />

            <h3>{`${isOn1}`}</h3>
            <Switch isOn={isOn1} onClick={() => setIsOn1(!isOn1)} disabled={false} ref={ref} />
            <br />
            <h3>비활성화되었을 시 40%의 alpha 값을 가집니다.</h3>
            <Switch isOn={true} onClick={() => {}} disabled={true} />
            <br />
            <Switch isOn={false} onClick={() => {}} disabled={true} />
        </>
    );
};
