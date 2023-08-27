import styled from '@emotion/styled';
import { ColorToken } from '../Color/Palette';
import { ThemeKeyType } from '../Color/Theme';
import { icons } from './assets';
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

const Svg = styled.svg<{ color?: ColorToken | ThemeKeyType }>`
    flex: 0 0 auto;
    color: ${({ theme, color = 'black' }) => {
        if (typeof color === 'object' && 'Palette' in color) {
            return theme.color.Palette[color];
        } else if (typeof color === 'object' && 'ThemeKey' in color) {
            return theme.themeColor[color];
        }
    }};
`;
