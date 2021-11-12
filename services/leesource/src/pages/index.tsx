import type { NextPage } from 'next';
import styled from '@emotion/styled';
import Header from '../components/common/Header';
import { Caption } from '@semicolondsm/ui';
import SideBar from '../components/SideBar';
import FlexList from '../components/FlexList';
import SourceItem, { ItemProps } from '../components/SourceItem';

const Home: NextPage = () => {
    return (
        <>
            <Header>test</Header>
            <SideBar></SideBar>
            <LeesourceList>
                <FlexList<ItemProps>
                    column={6}
                    renderItem={(item) => <SourceItem {...item} />}
                    items={[
                        {
                            image: 'https://static.toss.im/icons/svg/icon-coin-break.svg',
                            title: 'coin-break',
                        },
                        {
                            image: 'https://static.toss.im/icons/svg/icon-clock.svg',
                            title: 'clock',
                        },
                        {
                            image: 'https://static.toss.im/icons/svg/icon-twinkle-circle.svg',
                            title: 'twinkle-circle',
                        },
                        {
                            image: 'https://static.toss.im/icons/svg/icon-government-search.svg',
                            title: 'goverment-search',
                        },
                        {
                            image: 'https://static.toss.im/icons/svg/icon-card-point.svg',
                            title: 'card-point',
                        },
                        {
                            image: 'https://static.toss.im/icons/svg/icon-shield-call-green.svg',
                            title: 'shield-call-green',
                        },
                        {
                            image: 'https://static.toss.im/icons/svg/icon-shield-call-green.svg',
                            title: 'shield-call-green',
                        },
                        {
                            image: 'https://static.toss.im/icons/svg/icon-shield-call-green.svg',
                            title: 'shield-call-green',
                        },
                    ]}></FlexList>
            </LeesourceList>
        </>
    );
};

export default Home;

const LeesourceList = styled.div`
    margin: 0 auto;
    width: 840px;
    min-width: 840px;

    margin-top: 92px;
`;
