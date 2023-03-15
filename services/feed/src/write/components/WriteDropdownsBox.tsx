import styled from '@emotion/styled';
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
import Dropdown from '../../common/components/dropdown/Dropdown';
import { FlexRow } from '../../common/components/Flexbox';
import { AuthorityType, CategoryType } from '../../common/types';
import { AddFeedParam } from '../hooks/useAddFeed';
import useAuthorityCategory from '../hooks/useAuthorityCategory';

interface WriteDropdownBoxProps {
    setNewFeedInfo: Dispatch<SetStateAction<AddFeedParam>>;
}

type CategoryDeps = 'category' | 'authority';

const WriteDropdownBox = ({ setNewFeedInfo }: WriteDropdownBoxProps) => {
    const [isOpenState, setIsOpenState] = useState<Record<CategoryDeps, boolean>>({
        category: false,
        authority: false,
    });

    const setOpen = (openState: boolean, type: CategoryDeps) => {
        setIsOpenState({
            authority: false,
            category: false,
            [type]: openState,
        });
    };

    const authorityCategory = useAuthorityCategory();
    const [selectedCategory, setSelectedCategory] = useState<CategoryType>(authorityCategory[0]);

    const [selectedAuthority, setSelectedAuthority] = useState<AuthorityType>(
        authorityCategory[0].authorities[0],
    );

    useEffect(() => {
        setNewFeedInfo((state) => ({ ...state, category_id: selectedCategory.category_id }));
        setSelectedAuthority(selectedCategory.authorities[0]);
    }, [selectedCategory]);

    useEffect(() => {
        setNewFeedInfo((state) => ({ ...state, type: selectedAuthority.authority }));
    }, [selectedAuthority]);

    useEffect(() => {
        setSelectedCategory(authorityCategory[0]);
    }, [authorityCategory]);

    const categoryNames = authorityCategory.map((category) => category.name);

    return (
        <DropdownBox>
            <Dropdown
                items={categoryNames}
                value={selectedCategory.name}
                onClick={(selectedValue) => {
                    const selectedCategory = authorityCategory?.find(
                        (category) => category.name === selectedValue,
                    );
                    setSelectedCategory((state) => selectedCategory || state);
                }}
                open={isOpenState.category}
                setOpen={(state) => setOpen(state, 'category')}
            />
            <Dropdown
                items={selectedCategory.authorities.map((authority) => authority.authority_name)}
                value={selectedAuthority.authority_name}
                onClick={(selectedValue) => {
                    const selectedAuthority = selectedCategory.authorities.find(
                        (authority) => authority.authority_name === selectedValue,
                    );
                    setSelectedAuthority((state) => selectedAuthority || state);
                }}
                open={isOpenState.authority}
                setOpen={(state) => setOpen(state, 'authority')}
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
