import React, { FC } from 'react';
import { BaseTypography, TypoProps } from './BaseTypography';

export const Subtitle3: FC<TypoProps> = (props) => {
    const { children, ...restProps } = props;
    return (
        <BaseTypography md="Subtitle3" {...restProps}>
            {children}
        </BaseTypography>
    );
};
