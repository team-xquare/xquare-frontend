import styled from '@emotion/styled';

type ImageContainerType = 'display' | 'modify';

interface TypeProps extends Record<ImageContainerType, unknown> {
    display: {
        observerCallBack: () => void;
    };
    modify: {
        value: string[];
        onClose?: (src: string) => void;
    };
}

interface ImageContainerProps<T extends ImageContainerType> {
    images?: string[];
    type: T;
    props: TypeProps[T];
}

const ImageContainer = <T extends ImageContainerType>({
    images,
    props,
    type,
}: ImageContainerProps<T>) => {
    const isDisplay = type === 'display';
    if (type === 'display') {
    }
    return !!images?.length ? (
        <ImageContainerWrapper>
            <Container>
                {images.map((image, idx) => (
                    <ImageWrapper src={image} key={idx}></ImageWrapper>
                ))}
            </Container>
        </ImageContainerWrapper>
    ) : (
        <></>
    );
};

const ImageContainerWrapper = styled.div`
    width: 100%;
    padding: 0 24px 24px;
`;

const Container = styled.div`
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

const ImageWrapper = styled.div<{ src: string }>`
    background-image: url(${({ src }) => src});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: aqua;
    scroll-snap-align: center;
    width: 100%;
    flex-shrink: 0;
`;

export default ImageContainer;
