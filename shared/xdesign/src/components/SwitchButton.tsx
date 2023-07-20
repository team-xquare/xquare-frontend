import React, { FC, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { ColorToken } from '@semicolondsm/design-token';

export interface ButtonProps {
    /** 토글되었을 때의 작동시킬 함수 */
    onToggle?: (e: boolean) => void;
    /** 스위치 버튼의 default 값 */
    value?: boolean;
}

interface ButtonWrapperProps {
    background: ColorToken;
}

interface ButtonCircleProps {
    position: number;
}

enum Position {
    false = 1,
    true = 22,
}

enum Background {
    false = 'gray100',
    true = 'purple400',
}

const ButtonWrapperElement = styled.div<ButtonWrapperProps>`
    width: 40px;
    height: 20px;
    border-radius: 11px;
    padding: 1px;
    cursor: pointer;
    position: relative;
    background: ${(props) => props.theme.colors[props.background]};
    transition: background 0.1s linear;
`;

const ButtonCircle = styled.div<ButtonCircleProps>`
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: white;
    top: 50%;
    left: 0;
    transform: translate(${(props) => props.position}px, -50%);
    transition: transform 0.08s ease-in;
`;
/**  */
export const SwitchButton = ({ value = false, onToggle }: ButtonProps) => {
    const [isActive, setIsActive] = useState<boolean>(value);

    const onClick = () => {
        setIsActive((prevState) => !prevState);
    };

    useEffect(() => {
        if (onToggle) onToggle(isActive);
    }, [isActive]);

    const styledProps = {
        background: Background[isActive ? 'true' : 'false'],
        position: Position[isActive ? 'true' : 'false'],
    };

    return (
        <ButtonWrapperElement onClick={onClick} background={styledProps.background}>
            <ButtonCircle position={styledProps.position} />
        </ButtonWrapperElement>
    );
};
