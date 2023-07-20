import React, { useEffect, useState } from 'react';
import { Title3 } from '../components';
import { ButtonProps, SwitchButton } from '../components/SwitchButton';
export default {
    title: 'components/SwitchButton',
    component: SwitchButton,
};
export const Default: React.VFC<ButtonProps> = (props) => {
    const [isToggle, setIsToggle] = useState<boolean>(false);
    return (
        <>
            <Title3>{`${isToggle}`}</Title3>
            <SwitchButton onToggle={(value) => setIsToggle(value)} />
        </>
    );
};
