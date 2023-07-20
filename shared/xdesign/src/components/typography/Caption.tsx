import React, { FC } from 'react';
import { BaseTypography, TypoProps } from './BaseTypography';

export const Caption: FC<TypoProps> = (props) => {
    const { children, ...restProps } = props;
    return (
        <BaseTypography md="Caption" {...restProps}>
            {children}
        </BaseTypography>
    );
};
