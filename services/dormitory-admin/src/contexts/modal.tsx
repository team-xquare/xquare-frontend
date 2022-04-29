import React, { createContext, useContext, useState, useRef } from 'react';

interface StateType {
    modalRef?: React.RefObject<HTMLDivElement>;
    closeModal: () => void;
    openModal: () => void;
    isOpen: boolean;
}

const initialState: StateType = {
    closeModal: () => {},
    openModal: () => {},
    isOpen: false,
}

const ModalContext = createContext<StateType>(initialState);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const modalRef = useRef<HTMLDivElement>(null);

    const closeModal = () => {
        if(modalRef.current) modalRef.current.style.display = "none";
        setIsOpen(false);
    }

    const openModal = () => {
        if(modalRef.current) modalRef.current.style.display = "flex";
        setIsOpen(true);
    }

    return (
        <ModalContext.Provider value={{
            modalRef,
            closeModal,
            openModal,
            isOpen,
        }}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext);