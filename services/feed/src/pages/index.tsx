import type { GetServerSideProps, NextPage } from 'next';
import { FlexCol } from '../common/components/Flexbox';
import FeedPost from '../main/components/post';
import styled from '@emotion/styled';
import ButtonTabs from '../main/components/ButtonTabs';
import useTabMenu from '../main/hooks/useTabMenu';
import WriteButton from '../main/components/WriteButton';
import { useRouter } from 'next/router';
import { sendBridgeEvent } from '@shared/xbridge';
import { QueryClient, dehydrate, useInfiniteQuery } from '@tanstack/react-query';
import useIsAuthority from '../common/hooks/useIsAuthority';
import SkeletonFeed from '../main/components/post/SkeletonFeed';
import useFeedList, { prefetchFeedList } from '../main/hooks/useFeedList';
import { prefetchCategoryList } from '../common/hooks/useCategoryList';
import { useScroll } from '../main/hooks/useScroll';

const Home: NextPage = () => {
    const { onChangeTabValue, selectedTabValueKey, tabMenuKeys } = useTabMenu();
    const router = useRouter();
    const isScroll = useScroll();
    const isAuthority = useIsAuthority();

    const { feeds, bottomRef, isShowSkeleton } = useFeedList(selectedTabValueKey.category_id);

    return (
        <>
            <ButtonTabs
                items={tabMenuKeys}
                setValue={onChangeTabValue}
                value={selectedTabValueKey.name}
            />
            <FeedContainer>
                {feeds?.map((feed) => (
                    <FeedPost
                        categoryId={selectedTabValueKey.category_id}
                        {...feed}
                        key={feed.feed_id}
                    />
                ))}
                {isShowSkeleton ? (
                    <FullDiv ref={bottomRef}>
                        <SkeletonFeed />
                        <SkeletonFeed />
                    </FullDiv>
                ) : undefined}
            </FeedContainer>
            {isScroll && isAuthority && (
                <WriteButton
                    onClick={() =>
                        sendBridgeEvent(
                            'navigate',
                            { url: '/write', title: '글쓰기', rightButtonText: '완료' },
                            () => router.push('/write'),
                        )
                    }
                />
            )}
        </>
    );
};

const FullDiv = styled.div`
    width: 100%;
`;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const queryClient = new QueryClient();
    await Promise.all([prefetchFeedList(queryClient), prefetchCategoryList(queryClient)]);
    return {
        props: {
            dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
        },
    };
};

const FeedContainer = styled(FlexCol)`
    > * + * {
        border-top: 1px solid ${({ theme }) => theme.colors.gray200};
    }
`;

export default Home;
