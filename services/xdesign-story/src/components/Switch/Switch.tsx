import styled from '@emotion/styled';
import { SwitchProps } from './Switch.types';

const SwitchContainer = styled.div<SwitchProps>`
    position: relative;
    cursor: ${(props) => (props.isActive ? 'pointer' : 'not-allowed')};
    opacity: ${(props) => (props.isActive ? 1 : 0.4)};
    > .wrapper {
        width: 56px;
        height: 32px;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.1s;
        background-color: ${(props) =>
            props.isOn
                ? props.theme.color.lightTheme.Secondary
                : props.theme.color.lightTheme.Outline};
    }
    > .circle {
        position: absolute;
        top: 1px;
        left: ${(props) => (props.isOn ? '25px' : '1px')};
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: white;
        transition: 0.1s;
    }
`;

export const Switch = ({ isOn = false, onClick, isActive = false }: SwitchProps) => {
    return (
        <SwitchContainer onClick={isActive ? onClick : () => {}} isActive={isActive} isOn={isOn}>
            <div className="wrapper" />
            <div className="circle" />
        </SwitchContainer>
    );
};
