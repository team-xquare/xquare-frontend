import React from 'react';
import styled from '@emotion/styled';
import { SwitchProps } from './Switch.types';

const SWITCH_WIDTH = 56;
const SWITCH_HEIGHT = 32;
const SWITCH_PADDING = 1;
const SWITCH_TRANSITION_TIME = '0.1s';

const SwitchContainer = styled.button<SwitchProps>`
    position: relative;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    opacity: ${(props) => (props.disabled ? 0.4 : 1)};
    width: ${SWITCH_WIDTH}px;
    height: ${SWITCH_HEIGHT}px;
    border-radius: ${SWITCH_HEIGHT}px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: ${SWITCH_TRANSITION_TIME};
    background-color: ${(props) =>
        props.isOn ? props.theme.color.lightTheme.Secondary : props.theme.color.lightTheme.Outline};
    > .circle {
        position: absolute;
        top: ${SWITCH_PADDING}px;
        left: ${(props) =>
            props.isOn
                ? `${SWITCH_WIDTH - SWITCH_HEIGHT + SWITCH_PADDING}px`
                : `${SWITCH_PADDING}px`};
        width: ${SWITCH_HEIGHT - SWITCH_PADDING * 2}px;
        height: ${SWITCH_HEIGHT - SWITCH_PADDING * 2}px;
        border-radius: 50%;
        background: white;
        transition: ${SWITCH_TRANSITION_TIME};
    }
`;

export const Switch = React.forwardRef(function Switch(
    props: SwitchProps,
    ref: React.Ref<HTMLButtonElement> | null,
) {
    const handleClick = () => {
        if (!props.disabled) {
            props.onClick();
        }
    };

    return (
        <SwitchContainer
            ref={ref}
            onClick={handleClick}
            disabled={props.disabled}
            isOn={props.isOn}>
            <div className="circle" />
        </SwitchContainer>
    );
});
