import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

const ScrollBox = ({ children }: PropsWithChildren<{}>) => {
    return (
        <RelativeContainer>
            <ScrollArea>{children}</ScrollArea>
        </RelativeContainer>
    );
};

const RelativeContainer = styled.div`
    position: relative;
    width: 100%;
    flex: 1;
`;

const ScrollArea = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    overflow: auto;
`;

export default ScrollBox;
