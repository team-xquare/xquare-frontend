import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useRef } from 'react';
import useObserver from '../../../hooks/useObserver';

interface ImageObserverWrapperProps {
    src: string;
    callback: () => void;
}

const ImageObserverWrapper = ({ src, callback }: ImageObserverWrapperProps) => {
    const observeRef = useRef<HTMLImageElement>(null);
    const [observe, disconnect] = useObserver({
        ref: observeRef,
        callback,
        threshold: 0.5,
    });
    useEffect(() => {
        observe();
        return () => disconnect();
    }, []);
    return <ImageWrapper src={src} ref={observeRef}></ImageWrapper>;
};

const ImageWrapper = styled.div<{ src: string }>`
    background-image: url(${({ src }) => src});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: ${({ theme }) => theme.colors.gray300};
    scroll-snap-align: center;
    width: 100%;
    flex-shrink: 0;
`;

export default ImageObserverWrapper;
