import styled from '@emotion/styled';
import ImageDeleteWrapper from './ImageDeleteWrapper';

interface ImageDetailContainerProps {
    images?: string[];
    onDelete?: (idx: number) => void;
}

const ImageDeleteContainer = ({ images, onDelete }: ImageDetailContainerProps) => {
    return (
        <ImageContainer>
            <ImageViewContainer>
                {images?.map((src, idx) => (
                    <ImageDeleteWrapper src={src} onDelete={() => onDelete?.(idx)} key={idx} />
                ))}
            </ImageViewContainer>
        </ImageContainer>
    );
};

const ImageContainer = styled.div`
    width: 100%;
`;

const ImageViewContainer = styled.div`
    :first-of-type {
        padding-left: 24px;
    }
    :last-of-type {
        padding-right: 24px;
    }
    width: 100%;
    display: flex;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    gap: 12px;
    overflow: auto;
    ::after {
        content: '';
        display: block;
        padding-bottom: 90%;
    }
`;

export default ImageDeleteContainer;
