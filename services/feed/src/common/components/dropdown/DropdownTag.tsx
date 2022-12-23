import styled from '@emotion/styled';
import { FlexRow } from '../Flexbox';
import Image from 'next/image';
import arrow from '../../../assets/arrow.png';
import { PropsWithChildren } from 'react';

interface DropdownTagProps {
    readonly?: boolean;
    onClick?: () => void;
    className?: string;
}

const DropdownTag = ({
    children,
    onClick,
    readonly = false,
    className,
}: PropsWithChildren<DropdownTagProps>) => {
    return (
        <TagContainer onClick={() => !readonly && onClick?.()} className={className}>
            {children}
            {!readonly && <Image src={arrow} width={8} height={4} priority />}
        </TagContainer>
    );
};

const TagContainer = styled(FlexRow)`
    height: 32px;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.gray100};
    padding: 6px 12px;
    gap: 6px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.gray900};
`;

export default DropdownTag;
