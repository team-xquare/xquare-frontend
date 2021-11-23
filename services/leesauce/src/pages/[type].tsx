import type { NextPage, NextPageContext } from 'next';
import styled from '@emotion/styled';
import FlexList from '../components/common/FlexList';
import SourceItem from '../components/resource/SourceItem';
import { useGetResourceQuery } from '../services/resource';
import MainPageTemplate from '../components/main/MainPageTemplate';

interface Props {
    type: string;
    name: string;
}

const Type: NextPage<Props> = ({ type, name }) => {
    const { data, error, isLoading } = useGetResourceQuery(name);
    const _data = data?.leeSauces.filter((item) =>
        type === 'search' ? item : item.type === type?.toUpperCase(),
    );
    return (
        <MainPageTemplate>
            <FlexList
                column={6}
                items={_data || []}
                renderItem={(item) => !isLoading && <SourceItem {...item} />}
            />
        </MainPageTemplate>
    );
};

export default Type;

export async function getServerSideProps(ctx: NextPageContext) {
    const { type, name } = ctx.query;
    return {
        props: {
            type,
            name: name || null,
        },
    };
}
