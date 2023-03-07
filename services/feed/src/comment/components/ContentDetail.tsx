import { ComponentProps } from 'react';
import ProfileContent from '../../common/components/profile/ProfileContent';
import ProfileImage from '../../common/components/profile/ProfileImage';
import styled from '@emotion/styled';
import { FlexCol, FlexRow } from '../../common/components/Flexbox';
import { css } from '@emotion/react';

interface ContentProfileProps
    extends ComponentProps<typeof ProfileImage>,
        Omit<ComponentProps<typeof ProfileContent>, 'direction'> {
    isScroll: boolean;
}

const ContentProfile = ({ createAt, name, profileSrc, isScroll }: ContentProfileProps) => {
    return (
        <ContentProfileWrapper isScroll={isScroll}>
            <FlexRow gap={12}>
                <ProfileImage profileSrc={profileSrc} />
                <ProfileContent createAt={createAt} name={name} direction="col" />
            </FlexRow>
        </ContentProfileWrapper>
    );
};

const ContentProfileWrapper = styled(FlexCol)<{ isScroll: boolean }>`
    gap: 8px;
    width: 100%;
    padding: 8px 16px;
    box-sizing: border-box;

    ${({ theme, isScroll }) =>
        isScroll &&
        css`
            border-bottom: 1px solid ${theme.colors.gray200};
        `}
`;

export default ContentProfile;
