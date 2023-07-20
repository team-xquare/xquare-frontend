import React, { FC } from 'react';
import { BaseTypography, TypoProps } from './BaseTypography';

export const Botton: FC<TypoProps> = (props) => {
    const { children, ...restProps } = props;
    return (
        <BaseTypography md="Botton" {...restProps}>
            {children}
        </BaseTypography>
    );
};
