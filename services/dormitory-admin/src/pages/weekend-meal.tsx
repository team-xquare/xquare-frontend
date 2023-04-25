import styled from '@emotion/styled';
import { Body2, Button } from '@semicolondsm/ui';
import { useWeekendMealExcel, useWeekendMealList } from '../apis/apply';
import BlockContainer from '../components/common/BlockContainer';
import { Flex } from '../components/common/Flex';
import ScrollBox from '../components/common/ScrollBox';
import { Table, TableBody, TableCell, TableHead, TableRow } from '../components/common/Table';

const cellSizes = ['minmax(11%, 1fr)', 'minmax(11%, 1fr)'];

const WeekendMeal = () => {
    const { data } = useWeekendMealList();
    const weekendMealExcelDownload = useWeekendMealExcel();
    return (
        <Container>
            <BlockContainer title="주말 급식 신청 현황">
                <Flex fullWidth padding={'16px 24px'} justify="flex-end">
                    <Button size="sm" fill="purple" onClick={() => weekendMealExcelDownload()}>
                        엑셀 출력하기
                    </Button>
                </Flex>
                <ScrollBox>
                    <Table>
                        <TableHead>
                            <TableRow cellSizes={cellSizes} style={{ padding: '8px 28px' }}>
                                <CustomTableCell scope="col" justify="center">
                                    <Body2>학번</Body2>
                                </CustomTableCell>
                                <CustomTableCell scope="col" justify="center">
                                    <Body2>이름</Body2>
                                </CustomTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data?.students.map((stu) => (
                                <TableRow
                                    cellSizes={cellSizes}
                                    style={{ padding: '8px 28px' }}
                                    key={stu.id}>
                                    <CustomTableCell scope="col" justify="center">
                                        <Body2>{stu.num}</Body2>
                                    </CustomTableCell>
                                    <CustomTableCell scope="col" justify="center">
                                        <Body2>{stu.name}</Body2>
                                    </CustomTableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </ScrollBox>
            </BlockContainer>
        </Container>
    );
};
const Container = styled.section`
    width: 100%;
    height: 100%;
    padding: 74px 60px 40px 60px;
    overflow-x: auto;
`;

const CustomTableCell = styled(TableCell)`
    align-items: center;
`;

export default WeekendMeal;
