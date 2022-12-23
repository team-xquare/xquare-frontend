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
interface FeedPostProps extends Partial<ComponentProps<typeof PostProfile>> {
    contents: string;
    imageSrcs: string[];
}
//@todo props 바꾸기
const FeedPost = ({ createAt, name, profileSrc, contents, imageSrcs }: FeedPostProps) => {
    const actionSheetMenu = ['수정하기', '삭제하기'];
    useBridgeHandler('actionSheet', (e) => console.log(actionSheetMenu[e.detail.index]));
    return (
        <FlexCol fullWidth>
            <FeedPostContainer>
                <PostHeaderContainer>
                    <PostProfile createAt="1월 1일" name="김의찬" profileSrc="" />
                    <KababButton
                        onClick={() => {
                            sendBridgeEvent('actionSheet', actionSheetMenu, () => {
                                console.log('click');
                            });
                        }}
                    />
                </PostHeaderContainer>
                <ContentBox content={contents} limit={!!imageSrcs.length ? 40 : 20} />
            </FeedPostContainer>
            <ImageCountContainer
                images={[testImage.src, testImage.src, testImage.src, testImage.src, testImage.src]}
            />
            <PostFooter comments={1} like={1} isMyLike={false} />
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
