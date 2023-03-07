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
    const { data: feedsData, isLoading } = useFeedList();
    const feedDetailData = feedsData?.feeds.filter((feed) => feed.feed_id === postId)[0];
    const { mutate: addMutate } = useAddComments(postId);

    return (
        <>
            {isLoading ? (
                <></>
            ) : (
                <CommentContainer fullWidth>
                    <ContentDetail
                        content={feedDetailData?.content || ''}
                        createAt={feedDetailData?.created_at || ''}
                        name={feedDetailData?.name || ''}
                        profileSrc={feedDetailData?.profile || ''}
                    />
                    <CommentBoxSection gap={16} fullWidth>
                        <CommentWrapper>
                            {commentsData?.comments.map((comment) => (
                                <CommentBox
                                    key={comment.comment_id}
                                    comment={comment.content}
                                    createAt={comment.updated_at}
                                    profileSrc={comment.profile}
                                    name={comment.name}
                                    isMine={comment.is_mine}
                                    commentId={comment.comment_id}
                                />
                            ))}
                        </CommentWrapper>
                    </CommentBoxSection>
                    <SubmitTextarea
                        placeholder="댓글을 입력해주세요."
                        onChange={(e) => setCommentValue(e.target.value)}
                        value={commentValue}
                        onSubmit={() => {
                            setCommentValue('');
                            addMutate(commentValue);
                        }}
                    />
                </CommentContainer>
            )}
        </>
    );
};

const CommentContainer = styled(FlexCol)`
    > * + * {
        border-top: 1px solid ${({ theme }) => theme.colors.gray300};
    }
    position: absolute;
    width: 100%;
    height: 100%;
`;

const CommentBoxSection = styled(FlexCol)`
    flex: 1;
    position: relative;
    width: 100%;
`;

const CommentWrapper = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    overflow: scroll;
`;

export default Comment;
