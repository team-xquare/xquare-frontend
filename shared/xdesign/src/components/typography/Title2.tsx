import React, { FC } from 'react';
import { BaseTypography, TypoProps } from './BaseTypography';

export const Title2: FC<TypoProps> = (props) => {
    const { children, ...restProps } = props;
    return (
        <BaseTypography md="Title2" {...restProps}>
            {children}
        </BaseTypography>
    );
};
