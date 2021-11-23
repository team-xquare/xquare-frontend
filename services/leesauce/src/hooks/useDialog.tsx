import { useState } from 'react';

export interface UseDialogReturnType {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}
const useDialog = (): UseDialogReturnType => {
    const [isOpen, setIsopen] = useState<boolean>(false);
    const openModal = () => setIsopen(true);
    const closeModal = () => setIsopen(false);

    return { isOpen, openModal, closeModal };
};

export default useDialog;
