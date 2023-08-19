import styled from '@emotion/styled';
import { color } from '@/foundations';
import { SwitchProps } from './Switch.types';

interface SwitchContainerProps {
    isActive: boolean;
}

const SwitchContainer = styled.div<SwitchContainerProps>`
    position: relative;
    cursor: pointer;
    opacity: ${(props) => (props.isActive ? 1 : 0.4)};
    > .wrapper {
        width: 56px;
        height: 32px;
        border-radius: 30px;
        background: ${color.lightTheme.Outline};
        display: flex;
        justify-content: center;
        align-items: center;
    }
    > .switch--checked {
        background: ${color.lightTheme.Secondary};
        transition: 0.5s;
    }
    > .circle {
        position: absolute;
        top: 1px;
        left: 1px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: white;
        transition: 0.5s;
    }
    > .switch--checked {
        left: 25px;
        transition: 0.5s;
    }
`;

export const Switch = ({ isOn, onClick, isActive }: SwitchProps) => {
    return (
        <SwitchContainer onClick={isActive ? onClick : () => {}} isActive={isActive}>
            <div className={`wrapper ${isOn ? 'switch--checked' : null}`} />
            <div className={`circle ${isOn ? 'switch--checked' : null}`} />
        </SwitchContainer>
    );
};
