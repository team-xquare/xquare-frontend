import styled from '@emotion/styled';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Dropdown from '../../common/components/dropdown/Dropdown';
import { FlexRow } from '../../common/components/Flexbox';
import useCategoryList from '../../common/hooks/useCategoryList';
import { CategoryType } from '../../common/types';
import { DropdownType } from '../../pages/write';
import usePermissions from '../hooks/usePermissions';

interface WriteDropdownBoxProps {
    setSelectState: Dispatch<SetStateAction<Record<DropdownType, CategoryType>>>;
    selectState: Record<DropdownType, CategoryType>;
}

const WriteDropdownBox = ({ selectState, setSelectState }: WriteDropdownBoxProps) => {
    const { data: purpose } = useCategoryList();
    const { data: group } = usePermissions(selectState.purpose.key);

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
                items={
                    !!purpose?.length ? purpose.map((item) => item.name) : ['목록이 존재하지 않음']
                }
                value={selectState.purpose.name}
                onClick={(item) => {
                    const selectPurpose = purpose?.filter((info) => info.name === item)[0];
                    setSelectState((state) => ({
                        ...state,
                        purpose: { ...state.purpose, ...selectPurpose },
                    }));
                }}
                open={isOpenState.purpose}
                setOpen={(state) => setOpen(state, 'purpose')}
            />
            <Dropdown
                items={
                    !!group?.length
                        ? group?.map((item) => item.authority_name)
                        : ['권한이 존재하지 않음']
                }
                value={selectState.group.name}
                onClick={(item) => {
                    const selectGroup = group?.filter((info) => info.authority_name === item)[0];
                    setSelectState((state) => ({
                        ...state,
                        group: {
                            ...state.purpose,
                            category_id: selectGroup?.authority_id!,
                            name: selectGroup?.authority_name!,
                        },
                    }));
                }}
                open={isOpenState.group}
                setOpen={(state) => setOpen(state, 'group')}
            />
        </DropdownBox>
    );
};

const DropdownBox = styled(FlexRow)`
    width: 100%;
    gap: 8px;
    padding: 12px 16px;
`;

export default WriteDropdownBox;
