import styled from '@emotion/styled';
import React, { FC } from 'react';

interface FlexListProps<T> {
    items: ReadonlyArray<T>;
    renderItem: (item: T) => React.ReactNode;
    column?: number;
}
const FlexList = <T extends unknown>(props: FlexListProps<T>) => {
    const { items, renderItem, column = 6 } = props;
    return (
        <FlexListBlock>
            {items.map((item, index) => (
                <li key={index}>{renderItem(item)}</li>
            ))}
        </FlexListBlock>
    );
};

export default FlexList;

const FlexListBlock = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`;
