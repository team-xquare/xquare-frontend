import styled from '@emotion/styled';
import { FC } from 'react';

interface FullHeightScrollAreaProps {
    children?: React.ReactNode;
}
const FullHeightScrollArea: FC<FullHeightScrollAreaProps> = ({ children }) => {
    return (
        <Container>
            <ScrollArea>{children}</ScrollArea>
        </Container>
    );
};

export default FullHeightScrollArea;

const Container = styled.div`
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
