import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Botton } from '../typography';
import { Colors, ButtonProps, ButtonElementProps } from './types';
import { colorObjectToColorString, fillStyleToColorString, isBackgroundNone } from './utils';
import { full, link } from './styles';

enum Cursor {
    DISABLED = 'not-allowed',
    LOADING = 'progress',
    DEFAULT = 'pointer',
}

enum PaddingVertical {
    lg = 16,
    md = 16,
    sm = 8,
}

enum PaddingHorizontal {
    lg = 150,
    md = 68,
    sm = 16,
}

enum BorderRadius {
    lg = 12,
    md = 12,
    sm = 4,
}

export const ButtonElement = styled.button<ButtonElementProps>`
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    cursor: ${(props) => props.cursor};
    background: ${(props) => props.theme.colors[props.background]};
    padding: ${(props) => `${props.paddingVertical}px ${props.paddingHorizontal}px`};
    border-radius: ${(props) => props.borderRadius}px;
    border: 1px solid ${(props) => props.theme.colors[props.borderColor]};

    ${(props) => props.fullWidth && full()}

    ${(props) => props.fillStyle === 'link' && link(props)}
    @media(hover: hover) {
        &:hover {
            background: ${(props) => props.theme.colors[props.activeBackground]};
        }
    }
    -webkit-tap-highlight-color: transparent;
    &:active {
        background: ${(props) => props.theme.colors[props.activeBackground]};
    }

    & .semicolon-button-typography {
        margin-left: ${(props) => props.marginLeft}px;
        margin-right: ${(props) => props.marginRight}px;
    }
`;

export const Button = ({
    size = 'md',
    fill = 'default',
    loading = false,
    disabled = false,
    leftIcon,
    rightIcon,
    onClick,
    className,
    children,
    fullWidth,
}: ButtonProps) => {
    const cursorType = disabled ? 'DISABLED' : loading ? 'LOADING' : 'DEFAULT';
    const colorString = colorObjectToColorString(fill, true);
    const BackgroundColor = disabled
        ? fillStyleToColorString(colorString, 'diabled')
        : fillStyleToColorString(colorString, 'default');

    const BackgroundActiveColor = disabled
        ? fillStyleToColorString(colorString, 'diabled')
        : fillStyleToColorString(colorString, 'active');

    const FontColor = disabled
        ? fillStyleToColorString(colorString, 'disabledFont')
        : fillStyleToColorString(colorString, 'font');

    const styledProps = {
        cursor: Cursor[cursorType],
        background: BackgroundColor,
        activeBackground:
            loading && isBackgroundNone(colorString) ? BackgroundColor : BackgroundActiveColor,
        paddingVertical: PaddingVertical[size],
        paddingHorizontal: PaddingHorizontal[size],
        borderRadius: BorderRadius[size],
        borderColor: colorString === 'border' ? Colors['borderColor'] : BackgroundColor,
        size: size,
        fillStyle: colorString,
        color: FontColor,
        fullWidth: Boolean(fullWidth),
        marginLeft: leftIcon ? 6 : 0,
        marginRight: loading || rightIcon ? 6 : 0,
    };

    return (
        <ButtonElement className={className} onClick={onClick} disabled={disabled} {...styledProps}>
            {leftIcon}
            <Botton className="semicolon-button-typography" color={FontColor}>
                {children}
            </Botton>
            {rightIcon}
        </ButtonElement>
    );
};
