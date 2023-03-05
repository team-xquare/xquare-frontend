import React from 'react';
import styled from '@emotion/styled';
import { Body1, Body2, Button } from '@semicolondsm/ui';
import { Student } from '../../../apis/types';
import { useTrainingMutation } from '../../../apis/points';
import { TableCell, TableRow } from '../../common/Table';

interface PropsType {
    onClick: (id: string, isCheckbox?: boolean) => void;
    isMultiSelected: boolean;
    isActive: boolean;
    cellSizes: string[];
}

const PointListItem = ({
    id,
    num,
    name,
    good_point,
    bad_point,
    isMultiSelected,
    cellSizes,
    penalty_level,
    is_penalty_required,

    isActive,
    onClick,
}: Student & PropsType) => {
    const { mutate } = useTrainingMutation();
    const createText = (children: React.ReactNode, index?: number) => {
        return (
            <CustomTableCell
                key={index}
                justify="center"
                align="center"
                onClick={() => onClick(id)}>
                <Body2>{children}</Body2>
            </CustomTableCell>
        );
    };

    const penaltyKo = ['-', '1단계', '2단계', '3단계', '1OUT', '2OUT'];

    return (
        <TableRow
            cellSizes={cellSizes}
            isBorder
            customStyle
            isCursor
            onClick={() => onClick(id)}
            style={{ padding: '8px 28px' }}>
            {isMultiSelected && (
                <CustomTableCell justify="center" align="center">
                    <input
                        type="checkbox"
                        checked={isActive}
                        onChange={(e) => onClick(id, e.target.checked)}
                    />
                </CustomTableCell>
            )}

            {createText(num)}
            {createText(name)}
            {createText(good_point)}
            {createText(bad_point)}
            {createText(penaltyKo[penalty_level])}
            {is_penalty_required ? (
                <CustomTableCell justify="center" align="center">
                    <CustomButton
                        size="sm"
                        onClick={(e) => {
                            mutate({ id });
                        }}>
                        봉사완료
                    </CustomButton>
                </CustomTableCell>
            ) : penalty_level ? (
                createText('완료')
            ) : (
                createText('-')
            )}
        </TableRow>
    );
};

const CustomButton = styled(Button)``;
const CustomTableCell = styled(TableCell)`
    height: 40px;
    align-items: center;
`;

export default React.memo(PointListItem);
