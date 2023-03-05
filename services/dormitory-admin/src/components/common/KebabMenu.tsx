import styled from '@emotion/styled';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Flex } from './Flex';
import { keyframes } from '@emotion/react';
import { Body2 } from '@semicolondsm/ui';
interface KebabMenuProps<T> {
    item: ReadonlyArray<T>;
    callBack: (item: T) => void;
    className?: string;
}

const KebabMenu = <T extends string>({ callBack, item, className }: KebabMenuProps<T>) => {
    const [open, setOpen] = useState(false);
    return (
        <OutsideClickHandler onOutsideClick={() => setOpen?.(false)}>
            <KebabContainer align="center">
                <svg
                    onClick={() => setOpen(!open)}
                    className={className}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    cursor="pointer"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="4" r="2" fill="#706D75" />
                    <circle cx="12" cy="12" r="2" fill="#706D75" />
                    <circle cx="12" cy="20" r="2" fill="#706D75" />
                </svg>
                {open && (
                    <KebabMenuList>
                        {item.map((value, idx) => (
                            <DropDownItem
                                onClick={() => {
                                    setOpen(false);
                                    callBack(value);
                                }}>
                                <Body2 fontWeight="medium" color="gray600">
                                    {value}
                                </Body2>
                            </DropDownItem>
                        ))}
                    </KebabMenuList>
                )}
            </KebabContainer>
        </OutsideClickHandler>
    );
};

const KebabContainer = styled(Flex)`
    width: 100%;
    height: 100%;
    position: relative;
`;

const disolve = keyframes`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0px);
    }

`;
const KebabMenuList = styled.div`
    position: absolute;
    right: 0;
    top: 38px;
    display: flex;
    z-index: 999;
    flex-direction: column;
    gap: 12px;
    width: 147px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.white};

    max-height: 200px;
    box-shadow: 0px 2px 8px rgba(33, 33, 33, 0.25);

    animation: ${disolve} 0.2s ease-in-out;
`;

const DropDownItem = styled(Flex)`
    width: 100%;
    height: 40px;
    cursor: pointer;
    padding: 0 12px;
    align-items: center;

    &:hover {
        background-color: ${({ theme }) => theme.colors.gray100};
    }
`;
const ItemText = styled.div`
    color: ${({ theme }) => theme.colors.gray900};
    font-size: 14px;

    font-weight: 400;
`;

export default KebabMenu;
