import DropdownItemBox, { DropdownItemBoxProps } from './DropdownItemBox';
import styled from '@emotion/styled';
import DropdownTag from './DropdownTag';
import useEffectState from '../../hooks/useEffectState';

interface DropdownProps<T extends string> extends DropdownItemBoxProps<T> {
    value?: T;
    readonly?: boolean;
    open?: boolean;
}

const Dropdown = <T extends string = string, P = any>(props: DropdownProps<T>) => {
    const { value, onClick, setOpen, readonly, open = false, items, ...itemBoxProps } = props;
    const [itemsValue] = useEffectState(items);
    const initValue = props.items.filter((value) => !props.disableArr?.includes(value))[0];
    const [selectedItem, setSelectedItem] = useEffectState<T>(value || initValue);
    const [isOpen, setIsOpen] = useEffectState(open);
    const onClickItem = (item: T, p?: P) => {
        if (readonly) return;
        onClick?.(item);
        setSelectedItem(item);
        combineOpen(false);
    };

    const combineOpen = (state: boolean) => {
        if (readonly) return;
        setIsOpen(state);
        setOpen?.(state);
    };

    return (
        <DropdownWrapper>
            <DropdownTag
                readonly={readonly || items.length === 1}
                onClick={() => combineOpen(!isOpen)}>
                {selectedItem}
            </DropdownTag>
            {isOpen && (
                <DropdownItemBox
                    setOpen={setOpen}
                    items={itemsValue}
                    onClick={onClickItem}
                    {...itemBoxProps}
                />
            )}
        </DropdownWrapper>
    );
};

const DropdownWrapper = styled.div`
    position: relative;
`;

export default Dropdown;
