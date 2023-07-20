import React, { FC } from 'react';
import { BaseTypography, TypoProps } from './BaseTypography';

export const Subtitle1: FC<TypoProps> = (props) => {
    const { children, ...restProps } = props;
    return (
        <BaseTypography md="Subtitle1" {...restProps}>
            {children}
        </BaseTypography>
    );
};
