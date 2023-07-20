import React, { FC } from 'react';
import { BaseTypography, TypoProps } from './BaseTypography';

export const Subtitle4: FC<TypoProps> = (props) => {
    const { children, ...restProps } = props;
    return (
        <BaseTypography md="Subtitle4" {...restProps}>
            {children}
        </BaseTypography>
    );
};
