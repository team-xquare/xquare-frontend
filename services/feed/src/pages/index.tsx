import type {GetServerSideProps, NextPage} from 'next';
import {FlexCol} from '../common/components/Flexbox';
import FeedPost from '../main/components/post';
import styled from '@emotion/styled';
import ButtonTabs from '../main/components/ButtonTabs';
import useTabMenu from '../main/hooks/useTabMenu';
import WriteButton from '../main/components/WriteButton';
import {useRouter} from 'next/router';
import {sendBridgeEvent} from '@shared/xbridge';
import {QueryClient, dehydrate, useInfiniteQuery} from '@tanstack/react-query';
import {useWriteButton} from '../main/hooks/useWriteButton';
import useIsAuthority from '../common/hooks/useIsAuthority';
import {useMemo} from "react";
import {getFeedList} from "../main/apis";
import {useIntersect} from "../common/hooks/useIntersect";
import SkeletonFeed from "../main/components/post/SkeletonFeed";
import {prefetchFeedList} from "../main/hooks/useFeedList";
import {prefetchCategoryList} from "../common/hooks/useCategoryList";

const Home: NextPage = () => {
    const {onChangeTabValue, selectedTabValueKey, tabMenuKeys} = useTabMenu();
    // const {data: dataList} = useFeedList(selectedTabValueKey.category_id);
    const router = useRouter();
    const {isScroll} = useWriteButton();
    const isAuthority = useIsAuthority();

    const {data: dataList, hasNextPage, isFetching, fetchNextPage} = useInfiniteQuery(
        ["feed"],
        ({pageParam = null}) => getFeedList(selectedTabValueKey.category_id, pageParam),
        {
            getNextPageParam: (lastPage, page) => {
                return lastPage.feeds[lastPage.feeds.length - 1].created_at;
            },
        }
    )

    const bottomRef = useIntersect(async (entry, observer) => {
        observer.unobserve(entry.target)
        if (hasNextPage && !isFetching) fetchNextPage()
    })

    const feeds = useMemo(() => (dataList ? dataList.pages.flatMap(feed => feed.feeds) : []), [dataList])

    return (
        <>
            <ButtonTabs
                items={tabMenuKeys}
                setValue={onChangeTabValue}
                value={selectedTabValueKey.name}
            />
            <FeedContainer>
                {feeds?.map(feed => (
                    <FeedPost
                        categoryId={selectedTabValueKey.category_id}
                        {...feed}
                        key={feed.feed_id}
                    />
                ))}
                {dataList ? <FullDiv ref={bottomRef}>
                    <SkeletonFeed/>
                    <SkeletonFeed/>
                </FullDiv> : undefined}
            </FeedContainer>
            {isScroll && isAuthority && (
                <WriteButton
                    onClick={() =>
                        sendBridgeEvent(
                            'navigate',
                            {url: '/write', title: '글쓰기', rightButtonText: '완료'},
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
`

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const queryClient = new QueryClient();

    await Promise.all([prefetchFeedList(queryClient), prefetchCategoryList(queryClient)]);

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
};

const FeedContainer = styled(FlexCol)`
    > * + * {
        border-top: 1px solid ${({ theme }) => theme.colors.gray200};
    }
`;

export default Home;
