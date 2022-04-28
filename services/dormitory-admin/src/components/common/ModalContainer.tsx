import React from 'react';
import styled from '@emotion/styled';

const ModalContainer = React.forwardRef<HTMLDivElement, { children: React.ReactNode }>(({ children }, ref) => {
    return (
        <ModalWrapper ref={ref}>
            {children}
        </ModalWrapper>
    );
});

const ModalWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: none;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, .3);
`;

export default ModalContainer;