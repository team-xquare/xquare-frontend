import React, { FC } from 'react';
import { BaseTypography, TypoProps } from './BaseTypography';

export const Body3: FC<TypoProps> = (props) => {
    const { children, ...restProps } = props;
    return (
        <BaseTypography md="Body3" {...restProps}>
            {children}
        </BaseTypography>
    );
};
