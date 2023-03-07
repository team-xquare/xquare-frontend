import { ComponentProps } from 'react';
import ProfileContent from '../../common/components/profile/ProfileContent';
import ProfileImage from '../../common/components/profile/ProfileImage';
import styled from '@emotion/styled';
import { FlexCol, FlexRow } from '../../common/components/Flexbox';
import useEllipsis from '../../common/hooks/useEllipsis';
import ContentBox from '../../common/components/ContentBox';
interface ContentDetailProps
    extends ComponentProps<typeof ProfileImage>,
        Omit<ComponentProps<typeof ProfileContent>, 'direction'> {
    content: string;
}

const ContentDetail = ({ createAt, name, profileSrc, content }: ContentDetailProps) => {
    return (
        <ContentDetailWrapper>
            <FlexRow gap={12}>
                <ProfileImage profileSrc={profileSrc} />
                <ProfileContent createAt={createAt} name={name} direction="col" />
            </FlexRow>
        </ContentDetailWrapper>
    );
};

const ContentDetailWrapper = styled(FlexCol)`
    gap: 8px;
    width: 100%;
    padding: 8px 16px;
    box-sizing: border-box;

    border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
`;

export default ContentDetail;
