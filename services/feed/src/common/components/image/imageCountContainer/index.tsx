import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import ImageCounter from './ImageCounter';
import ImageObserverWrapper from './ImageObserverWrapper';
import { sendBridgeEvent } from '@shared/xbridge';
interface ImageCountContainerProps {
    images?: string[];
}

const ImageCountContainer = ({ images }: ImageCountContainerProps) => {
    const [currentImage, setCurrentImage] = useState(1);
    useEffect(() => {
        console.log(currentImage);
    }, [currentImage]);
    return (
        <ImageContainer>
            <ImageCounter current={currentImage} maxSize={images?.length || 0} />
            <ImageViewContainer
                onClick={() => sendBridgeEvent('imageDetail', images || [], () => {})}>
                {images?.map((src, idx) => (
                    <ImageObserverWrapper
                        callback={() => {
                            setCurrentImage(idx + 1);
                        }}
                        src={src}
                        key={idx}
                    />
                ))}
            </ImageViewContainer>
        </ImageContainer>
    );
};

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    padding: 0 24px 24px;
`;

const ImageViewContainer = styled.div`
    width: 100%;
    display: flex;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    overflow: auto;
    ::after {
        content: '';
        display: block;
        padding-bottom: 100%;
    }
`;

export default ImageCountContainer;
