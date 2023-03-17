import styled from '@emotion/styled';
import { Body2 } from '@semicolondsm/ui';
import { PicnicStu } from '../../apis/types';
import { TableCell, TableRow } from '../common/Table';

interface PicnicItemProps extends PicnicStu {
    cellSizes: string[];
    isMultiSelected: boolean;
    onClick: () => void;
    isChecked: boolean;
}

const PicnicItem = ({
    end_time,
    name,
    num,
    id,
    start_time,
    cellSizes,
    isMultiSelected,
    onClick,
    isChecked,
}: PicnicItemProps) => {
    return (
        <TableRow
            cellSizes={cellSizes}
            isBorder
            customStyle
            isActive={isChecked}
            isCursor
            style={{ padding: '8px 28px' }}
            onClick={onClick}>
            {isMultiSelected && (
                <CustomTableCell scope="col" justify="center">
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        style={{ cursor: 'pointer' }}
                    />
                </CustomTableCell>
            )}
            <CustomTableCell scope="col" justify="center">
                <Body2>{num}</Body2>
            </CustomTableCell>
            <CustomTableCell scope="col" justify="center">
                <Body2>{name}</Body2>
            </CustomTableCell>
            <CustomTableCell scope="col" justify="center">
                <Body2>{start_time}</Body2>
            </CustomTableCell>
            <CustomTableCell scope="col" justify="center">
                <Body2>{end_time}</Body2>
            </CustomTableCell>
        </TableRow>
    );
};

const CustomTableCell = styled(TableCell)`
    align-items: center;
`;

export default PicnicItem;
