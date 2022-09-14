import React, { createContext, useContext, useState } from 'react';

interface StateType {
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

    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);

    return (
        <ModalContext.Provider value={{
            closeModal,
            openModal,
            isOpen,
        }}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext);