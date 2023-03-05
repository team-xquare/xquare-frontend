import CommentBox from '../../comment/components/CommentBox';
import styled from '@emotion/styled';
import { FlexCol } from '../../common/components/Flexbox';
import ContentDetail from '../../comment/components/ContentDetail';
import { useComment } from '../../comment/hooks/useComment';
import { timeFormatter } from '../../utils/timeFormatter';
import useFeedList from '../../main/hooks/useFeedList';
import { useRouter } from 'next/router';
import SubmitTextarea from '../../common/components/SubmitTextarea';
import { useState } from 'react';
import useAddComments from '../../comment/hooks/useAddComment';

const Comment = () => {
    const router = useRouter();
    const postId = router.query.postId as string;
    const [commentValue, setCommentValue] = useState('');
    const { data: commentsData } = useComment();
    const { data: feedsData } = useFeedList();
    const feedDetailData = feedsData?.feeds.filter((feed) => feed.feed_id === postId)[0];
    const { mutate: addMutate } = useAddComments(postId);

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
                        key={comment.comment_id}
                        comment={comment.content}
                        createAt={comment.updated_at}
                        profileSrc={comment.profile}
                        name={comment.name}
                        commentId={comment.comment_id}
                    />
                ))}
            </FlexCol>
            <SubmitTextarea
                placeholder="댓글을 입력해주세요."
                onChange={(e) => setCommentValue(e.target.value)}
                value={commentValue}
                onSubmit={() => addMutate(commentValue)}
            />
        </CommentContainer>
    );
};

const CommentContainer = styled(FlexCol)`
    > * + * {
        border-top: 1px solid ${({ theme }) => theme.colors.gray300};
    }
`;

export default Comment;
