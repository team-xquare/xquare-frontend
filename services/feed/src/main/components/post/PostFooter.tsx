import styled from '@emotion/styled';
import { FlexRow } from '../../../common/components/Flexbox';

// @todo post footer api 연동
interface PostFooterProps {
    like: number;
    comments: number;
    isMyLike: boolean;
}

const PostFooter = ({ comments, like }: PostFooterProps) => {
    return (
        <PostFooterContainer>
            <FooterInfoContainer>
                <img></img>
                <p>좋아요 12</p>
            </FooterInfoContainer>
            <FooterInfoContainer>
                <img></img>
                <p>댓글 12</p>
            </FooterInfoContainer>
        </PostFooterContainer>
    );
};

const PostFooterContainer = styled(FlexRow)`
    gap: 18px;
    height: 48px;
    width: 100%;
    align-items: center;
    padding: 0 16px;
    border-top: 1px solid ${({ theme }) => theme.colors.gray300};
`;

const FooterInfoContainer = styled(FlexRow)`
    gap: 9px;
    align-items: center;
    > img {
        width: 28px;
        height: 28px;
        object-fit: cover;
        background-color: ${({ theme }) => theme.colors.blue300};
    }
    > p {
        color: ${({ theme }) => theme.colors.gray800};
        font-size: 14px;
    }
`;

export default PostFooter;
