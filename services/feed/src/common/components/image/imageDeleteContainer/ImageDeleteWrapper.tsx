import styled from '@emotion/styled';
import Image from 'next/image';
import deleteIcon from '../../../../assets/delete.png';
interface ImageDeleteWrapperProps {
    src: string;
    onDelete: () => void;
}

const ImageDeleteWrapper = ({ onDelete, src }: ImageDeleteWrapperProps) => {
    return (
        <DeleteImageWrapper src={src}>
            <DeleteButton onClick={onDelete}>
                <DeleteIcon src={deleteIcon} width={13} height={13} priority={true} />
            </DeleteButton>
        </DeleteImageWrapper>
    );
};

const DeleteImageWrapper = styled.div<{ src: string }>`
    position: relative;
    width: 100%;
    justify-self: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    scroll-snap-align: center;
    flex-shrink: 0;
    background-color: ${({ theme }) => theme.colors.gray300};
    background-image: url(${({ src }) => src});
`;

const DeleteButton = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    right: 12px;
    top: 12px;
    justify-content: center;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.3);
`;

const DeleteIcon = styled(Image)``;

export default ImageDeleteWrapper;
