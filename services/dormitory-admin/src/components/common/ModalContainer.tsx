import React from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import { useModal } from '../../contexts/modal';
import OutsideClickHandler from 'react-outside-click-handler';
import { keyframes } from '@emotion/react';
import { Flex } from './Flex';
interface PropsType {
    children: React.ReactNode;
    isCanClose?: boolean;
}

const ModalContainer = ({ children, isCanClose }: PropsType) => {
    const { closeModal, isOpen } = useModal();

    if (typeof window !== 'object' || !isOpen) return null;
    return ReactDOM.createPortal(
        <>
            {isOpen && (
                <ModalWrapper onClick={() => isCanClose && closeModal()}>
                    <ModalBox onClick={(e) => e.stopPropagation()}>
                        {isCanClose && (
                            <Flex fullWidth justify="flex-end">
                                <CloseButton onClick={() => isCanClose && closeModal()}>
                                    <svg viewBox="0 0 20 20">
                                        <path
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            d="M15.303 4.697a.75.75 0 0 1 0 1.06L11.061 10l4.242 4.243a.75.75 0 0 1-1.06 1.06L10 11.061l-4.243 4.242a.75.75 0 0 1-1.06-1.06L8.939 10 4.697 5.757a.75.75 0 0 1 1.06-1.06L10 8.939l4.243-4.242a.75.75 0 0 1 1.06 0Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </CloseButton>
                            </Flex>
                        )}
                        {children}
                    </ModalBox>
                </ModalWrapper>
            )}
        </>,
        document.getElementById('__next') as HTMLElement,
    );
};

const disolve = keyframes`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
    }
    
`;
const ModalWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.3);
    z-index: ${Math.pow(10, 11)};
`;

const ModalBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 14px 20px;
    border-radius: 8px;

    background: ${(props) => props.theme.colors.white};
    animation: ${disolve} 0.15s ease-in-out;
`;

const CloseButton = styled.button`
    width: 24px;
    height: 24px;
    padding: 4px;

    outline: none;
    border: none;
    box-sizing: content-box;

    background-color: ${(props) => props.theme.colors.white};
    border-radius: 4px;

    cursor: pointer;
    color: ${(props) => props.theme.colors.gray600};

    &:hover {
        background-color: ${(props) => props.theme.colors.gray200};
    }
`;

export default ModalContainer;
