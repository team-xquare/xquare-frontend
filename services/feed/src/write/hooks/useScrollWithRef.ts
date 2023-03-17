import { useEffect, useRef, useState } from 'react';

export const useScrollWithRef = () => {
    const ref = useRef<HTMLDivElement>(null);

    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const { scrollTop } = ref.current;

                if (scrollTop > 0) {
                    setIsScroll(true);
                } else {
                    setIsScroll(false);
                }
            }
        };

        ref.current?.addEventListener('scroll', handleScroll);

        return () => {
            ref.current?.removeEventListener('scroll', handleScroll);
        };
    }, [ref, setIsScroll]);

    return { ref, isScroll };
};
