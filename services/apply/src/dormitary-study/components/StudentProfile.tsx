import styled from '@emotion/styled';
import { Caption } from '@semicolondsm/ui';
import { Student } from '../types';

const StudentProfile = (props: Student) => {
    return (
        <ProfileContainer>
            <ProfileImage
                src={
                    props.profile_image || 'https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927'
                }
            />
            <ProfileName>{props.student_name}</ProfileName>
        </ProfileContainer>
    );
};

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
`;

const ProfileImage = styled.img`
    border-radius: 50%;
    width: 40px;
    height: 40px;
`;

const ProfileName = styled(Caption)`
    color: ${({ theme }) => theme.colors.white};
`;

export default StudentProfile;
