import React, { FC } from 'react';
import { BaseTypography, TypoProps } from './BaseTypography';

export const Title1: FC<TypoProps> = (props) => {
    const { children, ...restProps } = props;
    return (
        <BaseTypography md="Title1" {...restProps}>
            {children}
        </BaseTypography>
    );
};
