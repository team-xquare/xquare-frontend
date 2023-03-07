import styled from '@emotion/styled';
import Image from 'next/image';
import { Caption } from '@semicolondsm/ui';
import { Student } from '../types';
import defaultProfileImage from '../../assets/defaultProfileImage.png';
interface StudentProfileProps extends Student {
    isFull: boolean;
}

const StudentProfile = (props: StudentProfileProps) => {
    return (
        <ProfileContainer>
            <ProfileImage
                src={props.profile_image || defaultProfileImage}
                width={40}
                onError={(e) => {
                    e.currentTarget.src = defaultProfileImage.src;
                }}
                height={40}
            />
            <ProfileName isFull={props.isFull}>{props.student_name}</ProfileName>
        </ProfileContainer>
    );
};

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
`;

const ProfileImage = styled(Image)`
    border-radius: 50%;
    width: 40px;
    object-fit: cover;
    height: 40px;
`;

const ProfileName = styled(Caption)<{ isFull: boolean }>`
    color: ${({ theme, isFull }) => (isFull ? theme.colors.gray800 : theme.colors.white)};
`;

export default StudentProfile;
