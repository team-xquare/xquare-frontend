import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { FlexRow } from '../../common/components/Flexbox';

interface ButtonTabsProps<T> {
    items: ReadonlyArray<T>;
    value?: T;
    setValue?: (item: T) => void;
}

const ButtonTabs = <T extends string>({ items, value, setValue }: ButtonTabsProps<T>) => {
    const [selectedValue, setSelectedValue] = useState<T>(value || items[0]);
    useEffect(() => {
        value && setSelectedValue(value);
    }, [value]);

    const onSelect = (item: T) => {
        setSelectedValue(item);
        setValue?.(item);
    };

    return (
        <TabContainer>
            {items.map((item, idx) => (
                <TabButtonWrapper
                    isSelected={selectedValue === item}
                    onClick={() => onSelect(item)}
                    key={idx}>
                    {item}
                </TabButtonWrapper>
            ))}
        </TabContainer>
    );
};

const TabContainer = styled(FlexRow)`
    width: 100%;
    padding: 4px 16px 12px;
    gap: 8px;
    background-color: ${({ theme }) => theme.colors.white};
    z-index: 10;
    overflow: auto;
`;

const TabButtonWrapper = styled.div<{ isSelected: boolean }>`
    padding: 6px 16px;
    border-radius: 16px;
    width: fit-content;
    flex-shrink: 0;
    line-height: 20px;
    font-size: 14px;
    background-color: ${({ theme, isSelected }) =>
        isSelected ? theme.colors.purple400 : theme.colors.gray50};
    color: ${({ theme, isSelected }) => (isSelected ? theme.colors.gray50 : theme.colors.gray900)};
`;

export default ButtonTabs;
