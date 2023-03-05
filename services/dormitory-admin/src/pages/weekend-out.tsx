import styled from '@emotion/styled';
import { Body2, Select } from '@semicolondsm/ui';
import { usePicnicList } from '../apis/apply';
import { Flex } from '../components/common/Flex';
import MainSectionTitle from '../components/common/MainSectionTitle';
import ScrollBox from '../components/common/ScrollBox';
import SelectInput from '../components/common/SelectInput';
import { Table, TableBody, TableCell, TableHead, TableRow } from '../components/common/Table';

const cellSizes = [
    '40px',
    'minmax(11%, 1fr)',
    'minmax(11%, 1fr)',
    'minmax(11%, 1fr)',
    'minmax(11%, 1fr)',
];

const picnicType = [];

const WeekendOut = () => {
    const { data: picnicList } = usePicnicList();

    return (
        <Container>
            <Flex direction="column" fullWidth gap={24}>
                <Flex direction="column">
                    <MainSectionTitle>주말 외출</MainSectionTitle>
                    <Flex justify="space-between" fullWidth>
                        <Select items={[]} placeholder=""></Select>
                    </Flex>
                </Flex>
                <ScrollBox>
                    <Table style={{ overflow: 'scroll' }}>
                        <TableHead>
                            <TableRow cellSizes={cellSizes} style={{ padding: '8px 28px' }}>
                                <CustomTableCell scope="col" justify="center">
                                    <input type="checkbox"></input>
                                </CustomTableCell>
                                <CustomTableCell scope="col" justify="center">
                                    <Body2>학번</Body2>
                                </CustomTableCell>
                                <CustomTableCell scope="col" justify="center">
                                    <Body2>이름</Body2>
                                </CustomTableCell>
                                <CustomTableCell scope="col" justify="center">
                                    <Body2>외출시간</Body2>
                                </CustomTableCell>
                                <CustomTableCell scope="col" justify="center">
                                    <Body2>복귀시간</Body2>
                                </CustomTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {picnicList?.picnic_list.map((picnic) => (
                                <TableRow
                                    key={picnic.user_id}
                                    cellSizes={cellSizes}
                                    isBorder
                                    customStyle
                                    isCursor
                                    style={{ padding: '8px 28px' }}>
                                    <CustomTableCell scope="col" justify="center">
                                        <input type="checkbox"></input>
                                    </CustomTableCell>
                                    <CustomTableCell scope="col" justify="center">
                                        <Body2>{picnic.num}</Body2>
                                    </CustomTableCell>
                                    <CustomTableCell scope="col" justify="center">
                                        <Body2>{picnic.name}</Body2>
                                    </CustomTableCell>
                                    <CustomTableCell scope="col" justify="center">
                                        <Body2>{picnic.start_time}</Body2>
                                    </CustomTableCell>
                                    <CustomTableCell scope="col" justify="center">
                                        <Body2>{picnic.end_time}</Body2>
                                    </CustomTableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </ScrollBox>
            </Flex>
            <Flex direction="column" fullWidth>
                <MainSectionTitle>외출 수락하기</MainSectionTitle>
                <AcceptContainer></AcceptContainer>
            </Flex>
        </Container>
    );
};
const Container = styled.section`
    width: 100%;
    height: 100%;
    padding: 74px 60px 0 60px;
    display: grid;
    grid-template-columns: 700px minmax(400px, 1fr);
    grid-template-rows: 1fr 0;
    grid-gap: 40px;
    overflow-x: auto;
`;

const AcceptContainer = styled.section`
    width: 100%;
    flex: 1;
    background-color: ${({ theme }) => theme.colors.gray50};
`;

const CustomTableCell = styled(TableCell)`
    align-items: center;
`;

export default WeekendOut;
