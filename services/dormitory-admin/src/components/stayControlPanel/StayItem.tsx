import styled from '@emotion/styled';
import { Body2, Select } from '@semicolondsm/ui';
import { useEffect, useState } from 'react';
import { useStayCode, useStayUpdate } from '../../apis/apply';
import { Stay, StayCode } from '../../apis/types';
import { TableCell, TableRow } from '../common/Table';

const cellSizes = ['minmax(11%, 1fr)', 'minmax(11%, 1fr)', 'minmax(11%, 2fr)'];

const StayItem = (stayStu: Stay) => {
    const { data: stayCodeList } = useStayCode();
    const [curStayCode, setCurCode] = useState<StayCode>({ name: '', value: '' });
    const { mutate: stayUpdateMutate } = useStayUpdate(stayStu.id);

    return (
        <TableRow cellSizes={cellSizes} style={{ padding: '8px 28px' }}>
            <CustomTableCell justify="center">
                <Body2>{stayStu.num}</Body2>
            </CustomTableCell>
            <CustomTableCell justify="center">
                <Body2>{stayStu.name}</Body2>
            </CustomTableCell>

            <CustomTableCell justify="center">
                <Select
                    items={stayCodeList?.codes.map((stayCode) => stayCode.value) || ['1234']}
                    onChange={(value) => {
                        const filterCode = stayCodeList?.codes.filter(
                            (code) => code.value === value,
                        )[0];
                        setCurCode((cur) => ({ ...cur, ...filterCode }));
                        filterCode && stayUpdateMutate({ status: filterCode?.name });
                    }}
                    value={curStayCode.name || stayStu.code}
                    placeholder="잔류를 선택해주세요."
                />
            </CustomTableCell>
        </TableRow>
    );
};
const CustomTableCell = styled(TableCell)`
    align-items: center;
    overflow: inherit;
`;

export default StayItem;
