import CommentBox from '../../../comment/components/CommentBox';
import styled from '@emotion/styled';
import { Body1 } from '@semicolondsm/ui';
import { FlexCol, FlexRow } from '../../../common/components/Flexbox';
import ContentProfile from '../../../comment/components/ContentDetail';
import { useComment } from '../../../comment/hooks/useComment';
import { useRouter } from 'next/router';
import SubmitTextarea from '../../../common/components/SubmitTextarea';
import { useState } from 'react';
import useAddComments from '../../../comment/hooks/useAddComment';
import { ImageCountContainer } from '../../../common/components/image';
import { useScrollWithRef } from '../../../write/hooks/useScrollWithRef';
import KababButton from '../../../common/components/KababButton';
import useFeed from '../../../main/hooks/useFeed';
import useKebaButton from '../../../common/hooks/useKebaButton';

const Comment = () => {
    const router = useRouter();
    const postId = router.query.postId as string;
    const [commentValue, setCommentValue] = useState('');
    const { data: commentsData } = useComment();
    const { data: feedsData, isLoading } = useFeed(postId);
    const { mutate: addMutate } = useAddComments(postId);
    const { ref, isScroll } = useScrollWithRef();
    const { actionSheetMenu, menuAction } = useKebaButton(
        '/declare',
        postId,
        feedsData?.category_id ?? '',
    );

    return (
        <>
            {isLoading || !feedsData ? (
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
                            createAt={feedsData?.created_at || ''}
                            name={feedsData?.name || '익명'}
                            profileSrc={feedsData?.profile || ''}
                        />
                        <KababButton
                            menu={feedsData.is_mine ? actionSheetMenu : ['신고하기']}
                            onClick={(menu) => menuAction[menu]()}
                        />
                    </FlexRow>

                    <CommentBoxSection gap={8} fullWidth>
                        <CommentWrapper ref={ref}>
                            <ContentWrapper>
                                <DetailWrapper>
                                    <Body1>{feedsData?.content}</Body1>
                                </DetailWrapper>
                                {(feedsData?.attachments_url.length ?? 0) > 0 && (
                                    <ImageCountContainer images={feedsData?.attachments_url} />
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
    > p {
        word-break: break-all;
        white-space: pre-wrap;
        word-wrap: break-word;
    }
`;

export default Comment;
