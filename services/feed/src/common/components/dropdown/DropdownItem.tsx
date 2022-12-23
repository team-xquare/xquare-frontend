import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

interface DropdownItemProps {
    onClick?: () => void;
    isActive?: boolean;
}

const DropdownItem = ({
    children,
    onClick,
    isActive = true,
}: PropsWithChildren<DropdownItemProps>) => {
    return (
        <ItemWrapper isActive={isActive} onClick={() => isActive && onClick?.()}>
            {children}
        </ItemWrapper>
    );
};

const ItemWrapper = styled.div<{ isActive: boolean }>`
    line-height: 20px;
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme, isActive }) => (isActive ? theme.colors.gray800 : theme.colors.gray500)};
`;

export default DropdownItem;
