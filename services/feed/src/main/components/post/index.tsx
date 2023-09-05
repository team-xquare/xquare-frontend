import styled from '@emotion/styled';
import { FlexCol, FlexRow } from '../../../common/components/Flexbox';
import PostProfile from './PostProfile';
import PostFooter from './PostFooter';
import KababButton from '../../../common/components/KababButton';
import ContentBox from '../../../common/components/ContentBox';
import { ImageCountContainer } from '../../../common/components/image';
import { FeedType } from '../../types';
import useKebaButton from '../../../common/hooks/useKebaButton';
interface FeedPostProps extends FeedType {
    categoryId: string;
}
//@todo props 바꾸기

const FeedPost = ({
    attachments_url,
    name,
    comment_count,
    content,
    created_at,
    feed_id,
    is_like,
    is_mine,
    like_count,
    profile,
    authority_type,
    categoryId,
}: FeedPostProps) => {
    const { actionSheetMenu, menuAction } = useKebaButton(
        `/comment/${feed_id}/declare`,
        feed_id,
        categoryId,
    );
    return (
        <FlexCol fullWidth>
            <FeedPostContainer>
                <PostHeaderContainer>
                    <PostProfile
                        createAt={created_at}
                        name={`${name ? `${name}-` : ''}${authority_type}`}
                        profileSrc={profile}
                    />

                    <KababButton
                        menu={is_mine ? actionSheetMenu : ['신고하기']}
                        onClick={(menu) => menuAction[menu]()}
                    />
                </PostHeaderContainer>
                <ContentBox content={content.trim()} limit={!!attachments_url.length ? 72 : 48} />
            </FeedPostContainer>
            {!!attachments_url.length ? <ImageCountContainer images={attachments_url} /> : <></>}
            <PostFooter
                categoryId={categoryId}
                comments={comment_count}
                like={like_count}
                isMyLike={is_like}
                postId={feed_id}
            />
        </FlexCol>
    );
};

const FeedPostContainer = styled(FlexCol)`
    gap: 12px;
    width: 100%;
    padding: 16px;
`;

const PostHeaderContainer = styled(FlexRow)`
    width: 100%;
    justify-content: space-between;
`;

const FeedContent = styled.div`
    font-weight: 400;
    font-size: 14px;
    overflow: hidden;
    white-space: pre-wrap;
    word-wrap: break-word;
    display: block;
    line-height: 20px;
    > p {
        font-size: 14px;
        display: inline;
    }
`;

export default FeedPost;
