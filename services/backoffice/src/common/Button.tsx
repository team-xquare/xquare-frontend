import styled from '@emotion/styled';
import { Button as SDSButton } from '@semicolondsm/ui';
import { ButtonProps } from '@semicolondsm/ui/dist/components/Button/types';
import { FC } from 'react';

const Button: FC<ButtonProps> = (props) => {
    return (
        <ButtonContainer>
            <SDSButton fill="bnPurple" {...props} />
        </ButtonContainer>
    );
};

export default Button;

const ButtonContainer = styled.div`
    width: inherit;
    & button:hover {
        background-color: #2a2a2a !important;
    }
`;
