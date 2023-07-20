import React, { FC } from 'react';
import { BaseTypography, TypoProps } from './BaseTypography';

export const Subtitle2: FC<TypoProps> = (props) => {
    const { children, ...restProps } = props;
    return (
        <BaseTypography md="Subtitle2" {...restProps}>
            {children}
        </BaseTypography>
    );
};
