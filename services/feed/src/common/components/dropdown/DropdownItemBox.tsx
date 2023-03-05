import styled from '@emotion/styled';
import { FlexCol } from '../Flexbox';
import DropdownItem from './DropdownItem';
import OutsideClickHandler from 'react-outside-click-handler';

//@todo onClick 타입 추론 더 빡빡하게 하기
export interface DropdownItemBoxProps<T extends string> {
    items: ReadonlyArray<T>;
    onClick?: (item: T) => void;
    className?: string;
    setOpen: (value: boolean) => void;
    disableArr?: ReadonlyArray<T>;
}

const DropdownItemBox = <T extends string, P>({
    items = [],
    onClick,
    className,
    setOpen,
    disableArr = [],
}: DropdownItemBoxProps<T>) => {
    return (
        <>
            {!!items.length ? (
                <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
                    <DropdownBoxContainer>
                        {items.map((item, idx) => (
                            <DropdownItem
                                key={idx}
                                onClick={() => onClick?.(item)}
                                isActive={!disableArr.includes(item)}>
                                {item}
                            </DropdownItem>
                        ))}
                    </DropdownBoxContainer>
                </OutsideClickHandler>
            ) : (
                <></>
            )}
        </>
    );
};

const DropdownBoxContainer = styled(FlexCol)`
    display: flex;
    flex-direction: column;
    position: absolute;
    overflow: hidden;
    left: 0;
    top: 40px;
    padding: 16px;
    gap: 20px;
    z-index: 999;
    min-width: 120px;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.gray300};
    box-shadow: 0px 2px 8px ${({ theme }) => theme.colors.gray100};
`;

export default DropdownItemBox;
