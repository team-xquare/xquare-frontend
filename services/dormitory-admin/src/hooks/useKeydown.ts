import { useEffect, useState } from 'react';

export const useKeydown = (target: string) => {
    const [isKeydown, setIsKeydown] = useState<boolean>(false);

    const onKeydown = ({ key }: KeyboardEvent) => {
        if (target === key) setIsKeydown(true);
    };

    const onKeyup = ({ key }: KeyboardEvent) => {
        if (target === key) setIsKeydown(false);
    };

    useEffect(() => {
        window.addEventListener('keydown', onKeydown);
        window.addEventListener('keyup', onKeyup);

        return () => {
            window.removeEventListener('keydown', onKeydown);
            window.removeEventListener('keyup', onKeyup);
        };
    }, []);

    return isKeydown;
};
