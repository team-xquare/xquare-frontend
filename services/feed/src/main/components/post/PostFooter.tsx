import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import Comment from '../../../assets/Comment';
import Good from '../../../assets/Good';
import { FlexRow } from '../../../common/components/Flexbox';
import useFeedLike from '../../hooks/useFeedLike';

// @todo post footer api 연동
interface PostFooterProps {
    like: number;
    comments: number;
    isMyLike: boolean;
    postId: string;
}

const PostFooter = ({ comments, like, isMyLike, postId }: PostFooterProps) => {
    const { mutate: feedLikeMutate } = useFeedLike();
    const router = useRouter();
    return (
        <PostFooterContainer>
            <FooterInfoContainer>
                <Good isBlack={isMyLike} onClick={() => feedLikeMutate(postId)} />
                <p>좋아요 {like}</p>
            </FooterInfoContainer>
            <FooterInfoContainer onClick={() => router.push(`/comment/${postId}`)}>
                <Comment />
                <p>댓글 {comments}</p>
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
