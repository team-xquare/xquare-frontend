import { Caption, SwitchButton } from '@semicolondsm/ui';
import styled from '@emotion/styled';
import { FC, useState } from 'react';
import { ButtonProps } from '@semicolondsm/ui/dist/components/SwitchButton';

const Switch: FC<ButtonProps> = ({ onToggle, value = false }) => {
    return (
        <SwitchButtonContainer isActive={value}>
            <SwitchButton onToggle={onToggle} value={value} />
        </SwitchButtonContainer>
    );
};

export default Switch;

const SwitchButtonContainer = styled.div<{ isActive: boolean }>`
    & > div {
        background-color: ${({ isActive }) => (isActive ? '#9650FA' : '#212121')};
    }
`;
