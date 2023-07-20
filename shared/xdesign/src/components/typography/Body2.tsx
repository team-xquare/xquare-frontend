import React, { FC } from 'react';
import { BaseTypography, TypoProps } from './BaseTypography';

export const Body2: FC<TypoProps> = (props) => {
    const { children, ...restProps } = props;
    return (
        <BaseTypography md="Body2" {...restProps}>
            {children}
        </BaseTypography>
    );
};
