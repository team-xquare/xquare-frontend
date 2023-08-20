import styled from '@emotion/styled';
import { ColorToken } from '../Color/Palette';
import { icons } from './assets';
import { FilledXquare } from './assets/FilledXquare';
import { IconProps } from './Icon.types';

export const Icon = ({ iconName, color = 'black', size = 48, ...props }: IconProps) => {
    return iconName ? (
        <Svg
            as={icons[iconName]}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color={color}
            width={size}
            height={size}
            {...props}>
            <>{icons[iconName]}</>
        </Svg>
    ) : (
        <></>
    );
};

const Svg = styled.svg<{ color?: ColorToken }>`
    flex: 0 0 auto;
    color: ${({ theme, color = 'black' }) => theme.color.Palette[color]};
`;
