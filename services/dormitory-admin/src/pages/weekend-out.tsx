import styled from '@emotion/styled';
import { Body2, Button } from '@semicolondsm/ui';
import { useEffect, useState } from 'react';
import { usePicnicExcel, usePicnicList } from '../apis/apply';
import { SelectedPicnicType } from '../apis/types';
import BlockContainer from '../components/common/BlockContainer';
import ScrollBox from '../components/common/ScrollBox';
import { Table, TableBody, TableCell, TableHead, TableRow } from '../components/common/Table';
import PicnicItem from '../components/weekendOutControlPanel/PicnicItem';
import PicnicDetail from '../components/weekendOutControlPanel/PicnicDetail';
import PicnicController from '../components/weekendOutControlPanel/PicnicController';
import { Flex } from '../components/common/Flex';
import { formatTime } from '../libs/utils';

export const picnicType = ['대기 학생', '외출 학생'] as const;

const picnicTypeKeySelector: Record<(typeof picnicType)[number], string> = {
    '외출 학생': 'RETURN',
    '대기 학생': 'AWAIT',
};

const WeekendOut = () => {
    const [picnicTypeState, setPicnicTypeState] = useState<(typeof picnicType)[number]>(
        picnicType[0],
    );
    const [selectedPicnicIds, setSelectedPicnicIds] = useState<SelectedPicnicType>({});
    const [isMultiSelected, setMultiSelected] = useState<boolean>(false);
    const { data: picnicList } = usePicnicList(picnicTypeKeySelector[picnicTypeState]);
    const usePicnicExcelDownload = usePicnicExcel();

    const cellSizes = [
        ...(isMultiSelected ? ['40px'] : []),
        'minmax(11%, 1fr)',
        'minmax(11%, 1fr)',
        'minmax(11%, 1fr)',
        'minmax(11%, 1fr)',
    ];

    const handleSelectAll = () => {
        if (picnicList?.picnic_list.every(({ id }) => selectedPicnicIds[id])) {
            setSelectedPicnicIds((prev) => ({
                ...prev,
                ...picnicList?.picnic_list.reduce((acc, { id }) => {
                    acc[id] = false;
                    return acc;
                }, {} as SelectedPicnicType),
            }));
        } else {
            setSelectedPicnicIds((prev) => ({
                ...prev,
                ...(picnicList?.picnic_list.reduce((acc, { id }) => {
                    acc[id] = true;
                    return acc;
                }, {} as SelectedPicnicType) || {}),
            }));
        }
    };

    useEffect(() => {
        setSelectedPicnicIds({});
    }, [picnicTypeState]);

    const onClickPicnic = (id: string) => {
        if (isMultiSelected) {
            setSelectedPicnicIds({
                ...selectedPicnicIds,
                [id]: !selectedPicnicIds[id],
            });
        } else {
            setSelectedPicnicIds({
                [id]: true,
            });
        }
    };

    return (
        <Container>
            <BlockContainer title="주말 외출">
                <Flex fullWidth padding={'16px 24px'} justify="flex-end">
                    <Button size="sm" fill="purple" onClick={() => usePicnicExcelDownload()}>
                        엑셀 출력하기
                    </Button>
                </Flex>
                {/* <PicnicController
                    selectedPicnicIds={selectedPicnicIds}
                    isMultiSelected={isMultiSelected}
                    onClickMultiSelected={() => setMultiSelected((prev) => !prev)}
                    picnicTypeState={picnicTypeState}
                    setPicnicTypeState={setPicnicTypeState}
                /> */}
                <ScrollBox>
                    <Table style={{ overflow: 'auto' }}>
                        <TableHead>
                            <TableRow cellSizes={cellSizes} style={{ padding: '8px 28px' }}>
                                {isMultiSelected && (
                                    <CustomTableCell scope="col" justify="center">
                                        <input
                                            type="checkbox"
                                            checked={picnicList?.picnic_list.every(
                                                ({ id }) => selectedPicnicIds[id],
                                            )}
                                            onChange={handleSelectAll}></input>
                                    </CustomTableCell>
                                )}
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
                                <PicnicItem
                                    key={picnic.id}
                                    {...picnic}
                                    start_time={formatTime(picnic.start_time)}
                                    end_time={formatTime(picnic.end_time)}
                                    onClick={() => onClickPicnic(picnic.id)}
                                    isChecked={!!selectedPicnicIds[picnic.id]}
                                    cellSizes={cellSizes}
                                    isMultiSelected={isMultiSelected}
                                />
                            ))}
                        </TableBody>
                    </Table>
                </ScrollBox>
            </BlockContainer>
            <BlockContainer title="외출 상세보기">
                <PicnicDetail selectedPicnicId={selectedPicnicIds} />
            </BlockContainer>
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
