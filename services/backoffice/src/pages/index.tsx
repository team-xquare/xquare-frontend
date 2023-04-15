import styled from '@emotion/styled';
import { Body2, Button, Subtitle3, Title1 } from '@semicolondsm/ui';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import BlockContainer from '../components/common/BlockContainer';
import { Flex } from '../components/common/Flex';
import { Table, TableBody, TableCell, TableHead, TableRow } from '../components/common/Table';

const cellSize = ['100%'];

const Home: NextPage = () => {
    return (
        <Container direction="column">
            <BlockContainer
                title="서비스"
                titleRightContent={
                    <Link href="/create">
                        <Button size="sm" fill="purple">
                            서비스 추가
                        </Button>
                    </Link>
                }>
                <Table>
                    <TableHead>
                        <TableRow cellSizes={cellSize} style={{ padding: '8px 28px' }}>
                            <TableCell>
                                <Body2>서비스 명</Body2>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Array(12)
                            .fill(-1)
                            .map((_, idx) => (
                                <TableRow
                                    key={idx}
                                    style={{ padding: '16px 28px' }}
                                    customStyle
                                    isBorder
                                    isCursor
                                    cellSizes={cellSize}>
                                    <TableCell>
                                        <Body2>adad</Body2>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </BlockContainer>
        </Container>
    );
};

export default Home;

const Container = styled(Flex)`
    max-width: 840px;
    margin: 0 auto;
    padding: 24px;
`;
