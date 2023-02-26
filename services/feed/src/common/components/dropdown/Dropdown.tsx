import DropdownItemBox, { DropdownItemBoxProps } from './DropdownItemBox';
import styled from '@emotion/styled';
import DropdownTag from './DropdownTag';
import useEffectState from '../../hooks/useEffectState';
import { css, keyframes } from '@emotion/react';

interface DropdownProps<T extends string, P> extends DropdownItemBoxProps<T, P> {
    value?: T;
    readonly?: boolean;
    open?: boolean;
    setOpen?: (state: boolean) => void;
}

const Dropdown = <T extends string, P>(props: DropdownProps<T, P>) => {
    const { value, onClick, setOpen, readonly, open = false, items, ...itemboxProps } = props;
    const [itemsValue] = useEffectState(items);
    const initValue = props.items.filter((value) => !props.disableArr?.includes(value))[0];
    const [selectedItem, setSelectedItem] = useEffectState<T>(value || initValue);
    const [isOpen, setIsOpen] = useEffectState(open);
    const onClickItem = (item: T, p?: P) => {
        if (readonly) return;
        onClick?.(item, p);
        setSelectedItem(item);
        combineOpen(false);
    };

    const combineOpen = (state: boolean) => {
        if (readonly) return;
        setIsOpen(state);
        setOpen?.(state);
    };

    return (
        <DropdwonWrapper>
            <DropdownTag
                readonly={readonly || items.length === 1}
                onClick={() => combineOpen(!isOpen)}>
                {selectedItem}
            </DropdownTag>
            {isOpen && (
                <DropdownItemBox items={itemsValue} onClick={onClickItem} {...itemboxProps} />
            )}
        </DropdwonWrapper>
    );
};

const DropdwonWrapper = styled.div`
    position: relative;
`;

export default Dropdown;
