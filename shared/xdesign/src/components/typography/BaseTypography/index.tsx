import React, { FC } from 'react';
import styled from '@emotion/styled';
import { ColorToken, FontWeightToken } from '@semicolondsm/design-token';

import {
    body1,
    body2,
    body3,
    title1,
    title2,
    title3,
    subtitle1,
    subtitle2,
    subtitle3,
    subtitle4,
    caption,
    botton,
} from './textStyles';

interface OwnProps {
    md: Typo;
}

export interface TypoProps {
    children?: React.ReactNode;
    color?: ColorToken;
    textAlign?: string;
    className?: string;
    fontWeight?: FontWeightToken;
}

type Props = OwnProps & TypoProps;
type Typo = keyof typeof typographyList;
type DefaultWeight = Record<Typo, FontWeightToken>;
type TypoElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h6' | 'p' | 'div';

const defaultElement = {
    Title1: 'h1',
    Title2: 'h2',
    Title3: 'h3',
    Subtitle1: 'h4',
    Subtitle2: 'h5',
    Subtitle3: 'h6',
    Subtitle4: 'h6',
    Body1: 'p',
    Body2: 'p',
    Body3: 'p',
    Caption: 'div',
    Botton: 'div',
};

const defaultWeight: DefaultWeight = {
    Title1: 'bold',
    Title2: 'bold',
    Title3: 'bold',
    Subtitle1: 'medium',
    Subtitle2: 'medium',
    Subtitle3: 'medium',
    Subtitle4: 'medium',
    Body1: 'regular',
    Body2: 'regular',
    Body3: 'regular',
    Caption: 'regular',
    Botton: 'regular',
};

const typographyList = {
    Title1: title1,
    Title2: title2,
    Title3: title3,
    Subtitle1: subtitle1,
    Subtitle2: subtitle2,
    Subtitle3: subtitle3,
    Subtitle4: subtitle4,
    Body1: body1,
    Body2: body2,
    Body3: body3,
    Caption: caption,
    Botton: botton,
};

const TextElement = styled.div<Props>`
    margin: 0;
    color: ${({ theme, color }) => (color ? theme.colors[color] : theme.colors.black)};
    font-weight: ${({ fontWeight, md, theme }) =>
        fontWeight ? theme.fonts.weight[fontWeight] : theme.fonts.weight[defaultWeight[md]]};
    ${(props) => props.textAlign && `text-align: ${props.textAlign}`};
    ${(props) => typographyList[props.md]};
`;

export const BaseTypography: FC<Props> = (props) => {
    const { children, md, ...restProps } = props;
    const element = defaultElement[md] as TypoElement;
    return (
        <TextElement md={md} as={element} {...restProps}>
            {children}
        </TextElement>
    );
};
