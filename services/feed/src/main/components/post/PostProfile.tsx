import styled from '@emotion/styled';
import { ComponentProps } from 'react';
import ProfileContent from '../../../common/components/profile/ProfileContent';
import ProfileImage from '../../../common/components/profile/ProfileImage';

interface ProfileProps
    extends ComponentProps<typeof ProfileImage>,
        ComponentProps<typeof ProfileContent> {}

//@todo 전체적인 스타일 수정하기
const PostProfile = ({ name, profileSrc, createAt }: ProfileProps) => {
    return (
        <ProfileContainer>
            <ProfileImage profileSrc={profileSrc} />
            <ProfileContent name={name} createAt={createAt} />
        </ProfileContainer>
    );
};

const ProfileContainer = styled.div`
    display: flex;
    height: 44px;
    gap: 12px;
    align-items: center;
`;

export default PostProfile;
