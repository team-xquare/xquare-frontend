import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import pencil from '../../assets/pencil.png';

interface WriteButton {
    onClick: () => void;
}

const WriteButton = ({ onClick }: WriteButton) => {
    return (
        <ButtonWrapper onClick={onClick}>
            <Image src={pencil} width={22.4} height={22.4} priority></Image>
        </ButtonWrapper>
    );
};

const disolve = keyframes`
    from {
        opacity: 0;
        transform: scale(0.5);
    }
    to {
        opacity: 1;
    }

`;

const ButtonWrapper = styled.div`
    position: fixed;
    bottom: 16px;
    right: 16px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: ${({ theme }) => theme.colors.purple400};
    display: flex;
    align-items: center;
    justify-content: center;

    animation: ${disolve} 0.2s ease-in-out;
`;

export default WriteButton;
