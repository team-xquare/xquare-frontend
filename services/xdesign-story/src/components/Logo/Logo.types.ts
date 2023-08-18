import { HTMLAttributes } from 'react';

export interface LogoProps extends HTMLAttributes<HTMLElement> {
    symbol?: boolean;
    wordmark?: boolean;
    height?: number;
    serviceName?: string;
}
