import { ComponentProps } from 'react';

import styled from '@emotion/styled';
import { FlexCol, FlexRow } from '../../common/components/Flexbox';
import ProfileImage from '../../common/components/profile/ProfileImage';
import KababButton from '../../common/components/KababButton';
import ProfileContent from '../../common/components/profile/ProfileContent';

interface ProfileWithCommentProps
    extends ComponentProps<typeof ProfileImage>,
        Omit<ComponentProps<typeof ProfileContent>, 'direction'> {
    comment: string;
}

const CommentBox = ({ comment, createAt, name, profileSrc }: ProfileWithCommentProps) => {
    return (
        <ProfileWithCommentWrapper>
            <ProfileImage profileSrc={profileSrc}></ProfileImage>
            <CommentWrapper>
                <ProfileContent direction="row" createAt={createAt} name={name} />
                <CommentSection>{comment}</CommentSection>
            </CommentWrapper>
            <KababButton onClick={() => {}} />
        </ProfileWithCommentWrapper>
    );
};

const ProfileWithCommentWrapper = styled(FlexRow)`
    width: 100%;
    padding: 16px;
    align-items: flex-start;
`;

const CommentWrapper = styled(FlexCol)`
    gap: 4px;
    flex: 1;
    padding-left: 12px;
`;

const CommentSection = styled.section`
    color: ${({ theme }) => theme.colors.gray800};
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
`;

export default CommentBox;
