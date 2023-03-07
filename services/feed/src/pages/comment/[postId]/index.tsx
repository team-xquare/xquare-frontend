import CommentBox from '../../../comment/components/CommentBox';
import styled from '@emotion/styled';
import { Body1 } from '@semicolondsm/ui';
import { FlexCol, FlexRow } from '../../../common/components/Flexbox';
import ContentProfile from '../../../comment/components/ContentDetail';
import { useComment } from '../../../comment/hooks/useComment';
import useFeedList from '../../../main/hooks/useFeedList';
import { useRouter } from 'next/router';
import SubmitTextarea from '../../../common/components/SubmitTextarea';
import { useState } from 'react';
import useAddComments from '../../../comment/hooks/useAddComment';
import { ImageCountContainer } from '../../../common/components/image';
import { useScrollWithRef } from '../../../write/hooks/useScrollWithRef';
import PostFooter from '../../../main/components/post/PostFooter';
import KababButton from '../../../common/components/KababButton';
import { sendBridgeEvent } from '@shared/xbridge';

const Comment = () => {
    const router = useRouter();
    const postId = router.query.postId as string;
    const [commentValue, setCommentValue] = useState('');
    const { data: commentsData } = useComment();
    const { data: feedsData, isLoading } = useFeedList();
    const feedDetailData = feedsData?.feeds.filter((feed) => feed.feed_id === postId)[0];
    const { mutate: addMutate } = useAddComments(postId);
    const { ref, isScroll } = useScrollWithRef();

    return (
        <>
            {isLoading || !feedDetailData ? (
                <></>
            ) : (
                <CommentContainer fullWidth>
                    <FlexRow
                        justify="space-between"
                        fullWidth
                        style={{
                            paddingRight: 16,
                        }}>
                        <ContentProfile
                            isScroll={isScroll}
                            createAt={feedDetailData?.created_at || ''}
                            name={feedDetailData?.name || ''}
                            profileSrc={feedDetailData?.profile || ''}
                        />
                        <KababButton
                            menu={['신고']}
                            onClick={() =>
                                sendBridgeEvent('navigate', {
                                    title: '신고하기',
                                    url: `/declare`,
                                    rightButtonText: '제출',
                                })
                            }
                        />
                    </FlexRow>

                    <CommentBoxSection gap={8} fullWidth>
                        <CommentWrapper ref={ref}>
                            <ContentWrapper>
                                <DetailWrapper>
                                    <Body1>{feedDetailData?.content}</Body1>
                                </DetailWrapper>
                                {(feedDetailData?.attachments_url.length ?? 0) > 0 && (
                                    <ImageCountContainer images={feedDetailData?.attachments_url} />
                                )}
                            </ContentWrapper>

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
    overflow: auto;
`;

const ContentWrapper = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
`;

const DetailWrapper = styled.div`
    padding: 12px 16px;
`;

export default Comment;