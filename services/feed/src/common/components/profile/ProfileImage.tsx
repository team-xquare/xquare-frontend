import styled from '@emotion/styled';
import defaultProfile from '../../../assets/defaultProfile.png';

interface ProfileImageProps {
    profileSrc: string;
}

const ProfileImage = ({ profileSrc }: ProfileImageProps) => {
    return (
        <ProfileImageWrapper
            src={profileSrc || defaultProfile.src}
            onError={(e) => {
                e.currentTarget.src = defaultProfile.src;
            }}
        />
    );
};
const ProfileImageWrapper = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: gray;
    object-fit: cover;
`;

export default ProfileImage;
