import styled from '@emotion/styled';
import { ComponentProps } from 'react';

interface FlexProps {
    gap?: number;
    align?: string;
    justify?: string;
    fullWidth?: boolean;
}
export const FlexRow = styled.div<FlexProps>`
    width: ${(props) => (props.fullWidth ? '100%' : 'initial')};
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${(props) => (props.gap ? props.gap : 0)}px;
    align-items: ${(props) => (props.align ? props.align : 'center')};
    justify-content: ${(props) => (props.justify ? props.justify : 'flex-start')};
`;

export const FlexCol = styled.div<FlexProps>`
    width: ${(props) => (props.fullWidth ? '100%' : 'initial')};
    display: flex;
    flex-direction: column;
    gap: ${(props) => (props.gap ? props.gap : 0)}px;
    align-items: ${(props) => (props.align ? props.align : 'flex-start')};
    justify-content: ${(props) => (props.justify ? props.justify : 'center')};
`;

interface FlexBoxProps extends ComponentProps<typeof FlexRow> {
    direction: 'row' | 'col';
}

const FlexBox = (props: FlexBoxProps) => {
    const { direction, ...rest } = props;
    return direction === 'row' ? <FlexRow {...rest} /> : <FlexCol {...rest} />;
};

export default FlexBox;
