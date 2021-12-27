import { useEffect, useState } from 'react';
export interface UseDialogReturnType {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}
const useDialog = (defaultValue: boolean | undefined = false): UseDialogReturnType => {
    const [isOpen, setIsopen] = useState<boolean>(defaultValue);

    const openModal = () => setIsopen(true);
    const closeModal = () => setIsopen(false);

    return { isOpen, openModal, closeModal };
};

export default useDialog;
