import styled from '@emotion/styled';

interface ImageCounterProps {
    maxSize: number;
    current: number;
}

const ImageCounter = ({ maxSize, current }: ImageCounterProps) => {
    return (
        <CountBox>
            {current}/{maxSize}
        </CountBox>
    );
};

const CountBox = styled.div`
    position: absolute;
    right: 36px;
    top: 12px;
    padding: 4px 12px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 12px;
    line-height: 18px;
    background-color: rgba(33, 33, 33, 0.6);
    border-radius: 12px;
`;

export default ImageCounter;
