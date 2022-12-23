import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import Dropdown from '../common/components/dropdown/Dropdown';
import { FlexRow } from '../common/components/Flexbox';

interface WriteDropdownBoxProps {}

const WriteDropdownBox = () => {
    const [purposeState, setPurposeState] = useState<PurposeType>('대나무숲');
    const [isOpenState, setIsOpenState] = useState<Record<DropdownType, boolean>>({
        group: false,
        purpose: false,
    });

    const setOpen = (openState: boolean, type: DropdownType) => {
        setIsOpenState({
            group: false,
            purpose: false,
            [type]: openState,
        });
    };

    return (
        <DropdownBox>
            <Dropdown
                items={purpose}
                value="대나무숲"
                onClick={setPurposeState}
                open={isOpenState.purpose}
                setOpen={(state) => setOpen(state, 'purpose')}
            />
            <Dropdown
                items={purposeProps[purposeState].group}
                open={isOpenState.group}
                setOpen={(state) => setOpen(state, 'group')}
                disableArr={purposeProps[purposeState].disableArr}
            />
        </DropdownBox>
    );
};

type DropdownType = 'group' | 'purpose';

const purpose = ['공지사항', '동아리', '대나무숲'] as const;

type PurposeType = typeof purpose[number];

type PurposePropsType = {
    group: string[];
    disableArr: string[];
};

const purposeProps: Record<PurposeType, PurposePropsType> = {
    공지사항: {
        group: ['학생부', '사감부', '학생회', '자치회'],
        disableArr: ['학생부', '사감부'],
    },
    대나무숲: { group: ['익명'], disableArr: [] },
    동아리: { group: ['환', '정'], disableArr: [] },
};

const DropdownBox = styled(FlexRow)`
    width: 100%;
    gap: 8px;
    padding: 12px 16px;
`;

export default WriteDropdownBox;
