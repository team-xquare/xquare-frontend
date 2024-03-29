import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import Comment from '../../../assets/Comment';
import Good from '../../../assets/Good';
import { FlexRow } from '../../../common/components/Flexbox';
import useFeedLike from '../../hooks/useFeedLike';
import { sendBridgeEvent } from '@shared/xbridge';
import { Body1 } from '@semicolondsm/ui';

// @todo post footer api 연동
interface PostFooterProps {
    like: number;
    comments: number;
    isMyLike: boolean;
    postId: string;
    categoryId: string;
}

const PostFooter = ({ comments, like, isMyLike, postId, categoryId }: PostFooterProps) => {
    const { mutate: feedLikeMutate } = useFeedLike(categoryId);
    const router = useRouter();
    return (
        <PostFooterContainer>
            <FooterInfoContainer onClick={() => feedLikeMutate(postId)}>
                <Good isBlack={isMyLike} />
                <Body1>좋아요 {like}</Body1>
            </FooterInfoContainer>
            <FooterInfoContainer
                onClick={() =>
                    sendBridgeEvent('navigate', { url: `/comment/${postId}`, title: '댓글' }, () =>
                        router.push(`/comment/${postId}`),
                    )
                }>
                <Comment />
                <Body1>댓글 {comments}</Body1>
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
`;

const FooterInfoContainer = styled(FlexRow)`
    gap: 4px;
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
