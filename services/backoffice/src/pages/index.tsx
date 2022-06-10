import type { NextPage } from 'next';
import { Select, Subtitle4 } from '@semicolondsm/ui';
import styled from '@emotion/styled';
import ServiceList from '../service-list';
import MainPageTemplate from '../main/MainPageTemplate';
import Link from 'next/link';
import Button from '../common/Button';

const Home: NextPage = () => {
    return (
        <MainPageTemplate>
            <MainContainer>
                <div className="search-wrapper">
                    <TextInput placeholder="Search..." />
                    <div className="select-box">
                        <Select
                            items={['frontend', 'backend']}
                            value="frontend"
                            placeholder="선택해주세요..."
                        />
                    </div>
                    <Link href="/create">
                        <Button size="sm">New Service</Button>
                    </Link>
                </div>
                <ServiceList />
            </MainContainer>
        </MainPageTemplate>
    );
};

export default Home;

const MainContainer = styled.div`
    & .search-wrapper {
        margin: 12px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        gap: 8px;

        & .select-box {
            & div {
                background-color: #212121;
                border: 1px solid #212121;
            }
        }
    }
`;

const TextInput = styled.input`
    border: 1px solid rgba(255, 255, 255, 0.11);
    color: ${({ theme }) => theme.colors.gray900};
    background-color: rgba(255, 255, 255, 0.06);
    border-radius: 4px;
    padding: 8px 16px;
    outline: none;
`;
