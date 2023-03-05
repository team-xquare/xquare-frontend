import styled from '@emotion/styled';
import { Body1, Body2, Body3, Button, Select, Subtitle4 } from '@semicolondsm/ui';

import { NextPage } from 'next';
import { useMemo, useState } from 'react';
import { useStayCode, useStayExcel, useStayList } from '../apis/apply';
import { StaySortingEnum } from '../apis/types';
import { Flex } from '../components/common/Flex';
import Input from '../components/common/Input';
import MainSectionTitle from '../components/common/MainSectionTitle';
import ScrollBox from '../components/common/ScrollBox';
import SelectInput from '../components/common/SelectInput';
import { Table, TableHead, TableBody, TableRow, TableCell } from '../components/common/Table';
import StayItem from '../components/stayControlPanel/StayItem';
import { staySortedStudents } from '../libs/utils';

const cellSizes = ['minmax(11%, 1fr)', 'minmax(11%, 1fr)', 'minmax(11%, 2fr)'];

const Stay: NextPage = () => {
    const { data: stayList } = useStayList();
    const [curFilter, setCurFilter] = useState<typeof StaySortingEnum[number]>(StaySortingEnum[0]);
    const onExcelDownload = useStayExcel();
    const filterStudents = useMemo(
        () => staySortedStudents(curFilter, stayList?.stay_list),
        [curFilter, stayList],
    );

    return (
        <Container>
            <Flex direction="column" fullWidth gap={24}>
                <Flex direction="column">
                    <MainSectionTitle>잔류상태</MainSectionTitle>
                    <Flex justify="space-between" fullWidth>
                        <SelectInput
                            style={{
                                width: '300px',
                            }}
                            placeholder="학생 이름을 검색하세요."
                        />
                        <Flex gap={20}>
                            <Select
                                items={StaySortingEnum}
                                value={curFilter}
                                placeholder=""
                                onChange={(value) => setCurFilter(value)}
                            />
                            <Button size="sm" fill="purple" onClick={() => onExcelDownload()}>
                                엑셀 출력하기
                            </Button>
                        </Flex>
                    </Flex>
                </Flex>
                <Table>
                    <TableHead>
                        <TableRow cellSizes={cellSizes} style={{ padding: '8px 28px' }}>
                            <CustomTableCell scope="col" justify="center">
                                <Body2>학번</Body2>
                            </CustomTableCell>
                            <CustomTableCell scope="col" justify="center">
                                <Body2>이름</Body2>
                            </CustomTableCell>
                            <CustomTableCell scope="col" justify="center">
                                <Body2>잔류 상태</Body2>
                            </CustomTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filterStudents.map((stayStu) => (
                            <StayItem {...stayStu} key={stayStu.num} />
                        ))}
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
    overflow-x: auto;
`;

const CustomTableCell = styled(TableCell)`
    align-items: center;
`;
