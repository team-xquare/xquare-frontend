import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

const Spinner = () => {
    return (
        <Svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
            <circle
                className="path"
                cx="25"
                cy="25"
                r="20"
                fill="none"
                strokeWidth="5"
            ></circle>
        </Svg>
    );
}
const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg)
    }
`;

const dash = keyframes`
    0% {
        stroke-dasharray: 1, 150;
        stroke-dashoffset: 0;
    }

    50% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -35;
    }

    100% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -124;
    }
`;

const Svg = styled.svg`
    animation: ${rotate} 2s linear infinite;
    width: 50px;
    height: 50px;
    & circle {
        stroke: ${props => props.theme.colors.gray900};
        stroke-linecap: round;
        animation: ${dash} 1.5s ease-in-out infinite;
    }
`;

export default Spinner;