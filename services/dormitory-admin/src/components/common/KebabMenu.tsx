import styled from '@emotion/styled';
import { useState } from 'react';
import KebabIcon from '../../assets/kebab.svg';
import OutsideClickHandler from 'react-outside-click-handler';
interface KebabMenuProps<T> {
    item: ReadonlyArray<T>;
    callBack: (item: T) => void;
    className?: string;
}

const KebabMenu = <T extends string>({ callBack, item, className }: KebabMenuProps<T>) => {
    const [open, setOpen] = useState(false);
    return (
        <KebabContainer onOutsideClick={() => setOpen(false)}>
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
                        <ItemText
                            key={idx}
                            onClick={() => {
                                setOpen(false);
                                callBack(value);
                            }}>
                            {value}
                        </ItemText>
                    ))}
                </KebabMenuList>
            )}
        </KebabContainer>
    );
};

const KebabContainer = styled(OutsideClickHandler)`
    position: relative;
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
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 12px;
    max-height: 200px;
    box-shadow: 0px 2px 8px rgba(33, 33, 33, 0.25);
`;

const ItemText = styled.div`
    color: ${({ theme }) => theme.colors.gray900};
    font-size: 14px;
    cursor: pointer;
    font-weight: 400;
`;

export default KebabMenu;
