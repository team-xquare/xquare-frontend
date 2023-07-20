import React, { FC } from 'react';
import { BaseTypography, TypoProps } from './BaseTypography';

export const Body1: FC<TypoProps> = (props) => {
    const { children, ...restProps } = props;
    return (
        <BaseTypography md="Body1" {...restProps}>
            {children}
        </BaseTypography>
    );
};
