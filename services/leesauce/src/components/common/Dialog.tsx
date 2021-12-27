import styled from '@emotion/styled';
import { FC } from 'react';
import { UseDialogReturnType } from '../../hooks/useDialog';

interface DialogProps extends Omit<UseDialogReturnType, 'openModal' | 'closeModal'> {
    onClose?: () => void;
}

const Dialog: FC<DialogProps> = (props) => {
    const { isOpen, onClose, children } = props;
    return (
        <ModalContainer isOpen={isOpen}>
            <ModalOverlay onClick={onClose} />
            <ModalWrapper>{children}</ModalWrapper>
        </ModalContainer>
    );
};

export default Dialog;

const ModalContainer = styled.div<{ isOpen: boolean }>`
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    top: 0;
    left: 0;
    z-index: 99;
    position: fixed;
    width: 100%;
    height: 100%;
`;

const ModalWrapper = styled.div`
    position: absolute;
    z-index: 99;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

const ModalOverlay = styled.div`
    background-color: rgba(33, 33, 33, 0.6);
    width: 100%;
    height: 100%;
`;
