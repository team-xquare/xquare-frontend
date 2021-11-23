import { CSSProperties, FC, MouseEvent } from 'react';
import styled from '@emotion/styled';
import { Body1 } from '@semicolondsm/ui';

interface Props {
    style?: CSSProperties;
    onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}
const BaseOpacityButton: FC<Props> = ({ children, style, onClick }) => {
    return (
        <OpacityButtonBlock onClick={onClick} style={style}>
            <Body1 color="white">{children}</Body1>
        </OpacityButtonBlock>
    );
};

export default BaseOpacityButton;

const OpacityButtonBlock = styled.div`
    background-color: rgba(33, 33, 33, 0.4);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 112px;
    height: 32px;
`;
