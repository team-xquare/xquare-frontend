import CommentBox from '../../comment/components/CommentBox';
import styled from '@emotion/styled';
import { FlexCol } from '../../common/components/Flexbox';
import ContentDetail from '../../comment/components/ContentDetail';
import { useComment } from '../../comment/hooks/useComment';
import { timeFormatter } from '../../utils/timeFormatter';
import useFeedList from '../../main/hooks/useFeedList';
import { useRouter } from 'next/router';

const Comment = () => {
    const router = useRouter();

    const { data: commentsData } = useComment();
    const { data: feedsData } = useFeedList();
    const feedDetailData = feedsData?.feeds.filter(
        (feed) => feed.feed_id === router.query.postId,
    )[0];
    return (
        <CommentContainer fullWidth>
            <ContentDetail
                content={feedDetailData?.content || ''}
                createAt={feedDetailData?.created_at || ''}
                name={feedDetailData?.name || ''}
                profileSrc={feedDetailData?.profile || ''}
            />
            <FlexCol gap={16} fullWidth>
                {commentsData?.comments.map((comment) => (
                    <CommentBox
                        comment={comment.content}
                        createAt={comment.updated_at}
                        profileSrc={comment.profile}
                        name={comment.name}
                    />
                ))}
            </FlexCol>
        </CommentContainer>
    );
};

const CommentContainer = styled(FlexCol)`
    > * + * {
        border-top: 1px solid ${({ theme }) => theme.colors.gray300};
    }
`;

export default Comment;
