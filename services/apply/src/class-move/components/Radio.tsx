import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

type ShowComponentProps<T> = { children: T };
type RadioFlexOption = 'row' | 'wrapper' | 'grid';
interface RadioProps<T extends string, R extends ShowComponentProps<T> = ShowComponentProps<T>> {
    items: ReadonlyArray<T>;
    ShowComponent: (props: R) => JSX.Element;
    flex?: RadioFlexOption;
}

const Radio = <T extends string>({ items, ShowComponent, flex = 'row' }: RadioProps<T>) => {
    return (
        <RadioContainer flex={flex}>
            {items.map((item, idx) => (
                <ShowComponent key={idx}>{item}</ShowComponent>
            ))}
        </RadioContainer>
    );
};

const RadioContainer = styled.div<{ flex: RadioFlexOption }>`
    gap: 8px;
    ${({ flex }) => flexStyleSelector[flex]}
`;

const wrapStyle = css`
    display: flex;
    flex-wrap: wrap;
`;
const rowStyle = css`
    display: flex;
    overflow-x: scroll;
`;

const gridStyle = css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px 8px;
`;

const flexStyleSelector: Record<RadioFlexOption, SerializedStyles> = {
    wrapper: wrapStyle,
    row: rowStyle,
    grid: gridStyle,
};
export default Radio;
