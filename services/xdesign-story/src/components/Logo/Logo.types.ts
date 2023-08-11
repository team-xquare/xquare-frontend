import type { StandardAttrProps } from '@/types/ComponentsProps';

export interface LogoProps extends StandardAttrProps {
    symbol?: boolean;
    wordmark?: boolean;
    height?: number;
    serviceName?: string;
}
