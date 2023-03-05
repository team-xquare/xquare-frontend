import styled from '@emotion/styled';
import { Body1, Body2, Body3, Button, Select, Subtitle4 } from '@semicolondsm/ui';

import { NextPage } from 'next';
import { Flex } from '../components/common/Flex';
import Input from '../components/common/Input';
import MainSectionTitle from '../components/common/MainSectionTitle';
import { Table, TableHead, TableBody, TableRow, TableCell } from '../components/common/Table';

const cellSizes = [
    '40px',
    'minmax(11%, 1fr)',
    'minmax(11%, 1fr)',
    'minmax(11%, 1fr)',
    'minmax(11%, 1fr)',
];
const Stay: NextPage = () => {
    return (
        <Container>
            <Flex direction="column" fullWidth gap={24}>
                <MainSectionTitle>잔류상태</MainSectionTitle>
                <Flex justify="space-between" fullWidth>
                    <Input
                        style={{
                            width: '300px',
                        }}
                        placeholder="학생 이름을 검색하세요."
                    />
                    <Flex gap={20}>
                        <Select items={[]} placeholder="" />
                        <Button size="sm">엑셀 출력하기</Button>
                    </Flex>
                </Flex>

                <Table>
                    <TableHead>
                        <TableRow cellSizes={cellSizes} style={{ padding: '8px 28px' }}>
                            <TableCell scope="col"></TableCell>
                            <TableCell scope="col" justify="center">
                                <Body2>학번</Body2>
                            </TableCell>
                            <TableCell scope="col" justify="center">
                                <Body2>이름</Body2>
                            </TableCell>
                            <TableCell scope="col" justify="center">
                                <Body2>잔류 상태</Body2>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                            cellSizes={cellSizes}
                            isBorder
                            customStyle
                            isCursor
                            style={{ padding: '8px 28px' }}>
                            <TableCell justify="center">
                                <input type="checkbox"></input>
                            </TableCell>
                            <TableCell justify="center">
                                <Body2>2101</Body2>
                            </TableCell>
                            <TableCell justify="center">
                                <Body2>강석현</Body2>
                            </TableCell>

                            <TableCell justify="center">
                                <Body2>상점</Body2>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Flex>
        </Container>
    );
};

export default Stay;

const Container = styled.section`
    width: 100%;
    height: 100%;
    padding: 74px 60px 0 60px;
    display: grid;
    grid-template-columns: 700px minmax(400px, 1fr);
    grid-template-rows: 1fr 1fr 0px;
    grid-gap: 40px;
    overflow-x: auto;
`;
