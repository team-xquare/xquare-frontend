import { useEffect, useState } from 'react';
import { debounce } from '../../utils/debounce';

export const useScroll = (wait: number = 500) => {
    const [isScroll, setScroll] = useState(true);

    useEffect(() => {
        const handleScrollEnd = debounce(() => {
            setScroll(true);
        }, wait);

        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScroll(false);
                handleScrollEnd();
            } else {
                setScroll(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
    return isScroll;
};
