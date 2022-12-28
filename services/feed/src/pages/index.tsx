import type { NextPage } from 'next';
import { FlexCol } from '../common/components/Flexbox';
import FeedPost from '../main/components/post';
import styled from '@emotion/styled';
import ButtonTabs from '../main/components/ButtonTabs';
import useTabMenu from '../main/hooks/useTabMenu';
import WriteButton from '../main/components/WriteButton';
import { useRouter } from 'next/router';
import { sendBridgeEvent } from '@shared/xbridge';
const Home: NextPage = () => {
    const { onChangeTabValue, selectedTabValueKey, tabValue, tabMenuKeys } = useTabMenu();
    const router = useRouter();
    return (
        <>
            <ButtonTabs
                items={tabMenuKeys}
                setValue={onChangeTabValue}
                value={tabValue}></ButtonTabs>
            <FeedContainer>
                <FeedPost contents="ㅁ어ㅏㄹ먼ㅇ라넘아럼" imageSrcs={['']} />
                <FeedPost
                    contents={`추혜연 바보 멍청이
추혜연 멍청이
멍청이 = 추혜연
추혜연 그만 먹어
추혜연 팩폭 당했죠?
                `}
                    imageSrcs={['']}
                />
                <FeedPost
                    contents="ㅁ어ㅏㄹ먼ㅇ라넘아럼나어람너라ㅓㅁ낭러만어람너라ㅓㅁㄴㅇㅁ어ㅏㄹ먼ㅇ라넘아럼나어람너라ㅓㅁ낭러만어람너라ㅓㅁㄴㅇㅁ어ㅏㄹ먼ㅇ라넘아럼나어람너라ㅓㅁ낭러만어람너라ㅓㅁㄴㅇㅁ어ㅏㄹ먼ㅇ라넘아럼나어람너라ㅓㅁ낭러만어람너라ㅓㅁㄴㅇㅁ어ㅏㄹ먼ㅇ라넘아럼나어람너라ㅓㅁ낭러만어람너라ㅓㅁㄴㅇㅁ어ㅏㄹ먼ㅇ라넘아럼나어람너라ㅓㅁ낭러만어람너라ㅓㅁㄴㅇㅁ어ㅏㄹ먼ㅇ라넘아럼나어람너라ㅓㅁ낭러만어람너라ㅓㅁㄴㅇ라넘아럼나어람너라ㅓㅁ낭러만어람너라ㅓㅁㄴㅇㅁ어ㅏㄹ먼ㅇ라넘아럼나어람너라ㅓㅁ낭러만어람너라ㅓㅁㄴㅇㅁ어ㅏㄹ먼ㅇ라넘아럼나어람너라ㅓㅁ낭러만어람너라ㅓㅁㄴㅇㅁ어ㅏㄹ먼ㅇ라넘아럼나어람너라ㅓㅁ낭러만어람너라ㅓㅁㄴㅇㅁ어ㅏㄹ먼ㅇ라넘아럼나어람너라ㅓㅁ낭러만어람너라ㅓㅁㄴㅇㅁ어ㅏㄹ먼ㅇ라넘아럼나어람너라ㅓㅁ낭러만어람너라ㅓㅁㄴㅇㅁ어ㅏㄹ먼ㅇ라넘아럼나어람너라ㅓㅁ낭러만어람너라ㅓㅁㄴㅇ라넘아럼나어람너라ㅓㅁ낭러만어람너라ㅓㅁㄴㅇㅁ어ㅏㄹ먼ㅇ라넘아럼나어람너라ㅓㅁ낭러만어람너라ㅓㅁㄴㅇㅁ어ㅏㄹ먼ㅇ라넘아럼나어람너라ㅓㅁ낭러만어람너라ㅓㅁㄴㅇㅁ어ㅏㄹ먼ㅇ라넘아럼나어람너라ㅓㅁ낭러만어람너라ㅓㅁㄴㅇㅁ어ㅏㄹ먼ㅇ라넘아럼나어람너라ㅓㅁ낭러만어람너라ㅓㅁㄴㅇㅁ어ㅏㄹ먼ㅇ라넘아럼나어람너라ㅓㅁ낭러만어람너라ㅓㅁㄴㅇㅁ어ㅏㄹ먼ㅇ라넘아럼나어람너라ㅓㅁ낭러만어람너라ㅓㅁㄴㅇ"
                    imageSrcs={[]}
                />
                <FeedPost
                    contents="ㅁ어ㅏㄹ먼ㅇ라넘아럼나어람너라ㅓㅁ낭러만어람너라ㅓㅁㄴㅇㅁ어ㅏㄹ먼ㅇ라넘아럼나어람너라ㅓㅁ낭러만어람너라ㅓㅁㄴㅇㅁ어ㅏㄹ먼ㅇ라넘아럼나어람너라ㅓㅁ낭러만어람너라ㅓㅁㄴㅇㅁ어ㅏㄹ먼ㅇ라넘아럼나어람너라ㅓㅁ낭러만어람너라ㅓㅁㄴㅇㅁ어ㅏㄹ먼ㅇ라넘아럼나어람너라ㅓㅁ낭러만어람너라ㅓㅁㄴㅇㅁ어ㅏㄹ먼ㅇ라넘아럼나어람너라ㅓㅁ낭러만어람너라ㅓㅁㄴㅇㅁ어ㅏㄹ먼ㅇ라넘아럼나어람너라ㅓㅁ낭러만어람너라ㅓㅁㄴㅇ"
                    imageSrcs={[]}
                />
            </FeedContainer>
            <WriteButton
                onClick={() =>
                    sendBridgeEvent('navigate', { url: '/write', title: '글쓰기' }, () =>
                        router.push('/write'),
                    )
                }
            />
        </>
    );
};

const FeedContainer = styled(FlexCol)`
    > * + * {
        border-top: 8px solid ${({ theme }) => theme.colors.gray100};
    }
`;

export default Home;
