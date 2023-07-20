import React, { FC, CSSProperties, useState } from 'react';
import styled from '@emotion/styled';
import { Botton } from './typography';

type ClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

export interface itemOption {
    title: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    buttonStyle?: CSSProperties;
}

export interface ToggleButtonProps {
    /** 들어갈 item 의 값들 type:{ title:string } */
    items: itemOption[];
    /** 사용자가 직접 설정할 contain 스타일 값 */
    containStyle?: CSSProperties;
    /** 사용자가 직접 설정해는 버튼의 갯수 (이 값이 없으면 item의 길이로 설정됩니다) */
    defaultValue?: number;
}

interface ButtonStyledProps {
    activeNumber: number;
    length: number;
}

const Container = styled.div`
    width: 100%;
    padding: 4px;
    overflow: hidden;
    border-radius: 22px;
    display: flex;
    position: relative;
`;

const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    position: relative;
`;

const Button = styled.button`
    border-radius: 22px;
    padding: 8px 0;
    flex: 1;
    z-index: 3;
    cursor: pointer;
    border: none;
    background: none;
`;

const ActiveBackground = styled.div<ButtonStyledProps>`
    width: calc(${(props) => 100 / props.length}%);
    height: 100%;
    border-radius: 22px;
    position: absolute;
    background: white;
    z-index: 2;
    transform: translateX(${(props) => (props.activeNumber - 1) * 100}%);
    transition: all 0.3s cubic-bezier(0.5, 1, 0.89, 1);
`;

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colors.gray100};
    z-index: 1;
`;

export const ToggleButton = ({ items, containStyle, defaultValue = 1 }: ToggleButtonProps) => {
    const rangeValue =
        defaultValue < 1 ? 1 : defaultValue > items.length ? items.length : defaultValue;
    const [activeNumber, setActiveNumber] = useState<number>(rangeValue);

    const buttonOnClick = (
        number: number,
        e: ClickEvent,
        callback?: (event: ClickEvent) => void,
    ) => {
        setActiveNumber(number);
        if (callback) callback(e);
    };

    return (
        <Container style={containStyle}>
            <Background />
            <ButtonWrapper>
                <ActiveBackground activeNumber={activeNumber} length={items.length} />
                {items.map(({ title, onClick, buttonStyle }, i) => (
                    <Button
                        style={buttonStyle}
                        onClick={(e) => buttonOnClick(i + 1, e, onClick)}
                        key={i}>
                        <Botton color="gray700">{title}</Botton>
                    </Button>
                ))}
            </ButtonWrapper>
        </Container>
    );
};
