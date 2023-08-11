export interface ChildrenProps {
    children?: React.ReactNode;
}

export interface DisableProps {
    disabled?: boolean;
}

export interface LoadingProps {
    loading?: boolean;
}

export interface OnClickProps {
    onClick?: (e?: React.MouseEvent) => void;
}

export interface StandardAttrProps {
    className?: string;
    id?: string;
    style?: React.CSSProperties;
}
