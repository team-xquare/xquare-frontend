import styled from '@emotion/styled';
import { FlexCol, FlexRow } from '../../../common/components/Flexbox';
import PostProfile from './PostProfile';
import PostFooter from './PostFooter';
import { ComponentProps } from 'react';
import KababButton from '../../../common/components/KababButton';
import ContentBox from '../../../common/components/ContentBox';
import testImage from '../../../assets/test/testimage1.jpeg';
import { ImageCountContainer } from '../../../common/components/image';
import { sendBridgeEvent, useBridgeHandler } from '@shared/xbridge';
import { FeedType } from '../../types';
import { timeFormatter } from '../../../utils/timeFormatter';
interface FeedPostProps extends FeedType {}
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
    type,
}: FeedPostProps) => {
    const actionSheetMenu = ['수정하기', '삭제하기'];
    const onSelectMenu = useBridgeHandler(
        'actionSheet',
        (e) => console.log(actionSheetMenu[e.detail.index]),
        {
            menu: actionSheetMenu,
        },
    );
    return (
        <FlexCol fullWidth>
            <FeedPostContainer>
                <PostHeaderContainer>
                    <PostProfile
                        createAt={created_at}
                        name={`${name}-${type}`}
                        profileSrc={profile}
                    />
                    <KababButton onClick={onSelectMenu} />
                </PostHeaderContainer>
                <ContentBox content={content} limit={!!attachments_url.length ? 40 : 20} />
            </FeedPostContainer>
            {!!attachments_url.length ? <ImageCountContainer images={attachments_url} /> : <></>}
            <PostFooter
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
