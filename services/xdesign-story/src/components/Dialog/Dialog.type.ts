import { HTMLAttributes } from 'react';

export interface ButtonType {
    onClick: () => void;
    text: string;
}

export interface DialogProps {
    title: string;
    content: string;
    leftButton?: ButtonType;
    rightButton: ButtonType;
    setIsActiveDialog: React.Dispatch<React.SetStateAction<boolean>>;
}
