import styled from '@emotion/styled';
import { FC } from 'react';
import { UseDialogReturnType } from '../../hooks/useDialog';

interface DialogProps extends Partial<UseDialogReturnType> {}
const Dialog: FC<DialogProps> = (props) => {
    const { isOpen, closeModal, children } = props;
    return (
        <>
            {isOpen && (
                <ModalContainer>
                    <ModalOverlay onClick={closeModal} />
                    <ModalWrapper>{children}</ModalWrapper>
                </ModalContainer>
            )}
        </>
    );
};

export default Dialog;

const ModalContainer = styled.div`
    top: 0;
    left: 0;
    z-index: 99;
    position: fixed;
    width: 100%;
    height: 100%;
`;

const ModalWrapper = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

const ModalOverlay = styled.div`
    background-color: rgba(33, 33, 33, 0.6);
    width: 100%;
    height: 100%;
`;
