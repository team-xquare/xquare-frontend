import { useMemo } from 'react';
import useCategoryList from '../../common/hooks/useCategoryList';
import { CategoryType } from '../../common/types';

const useAuthorityCategory = () => {
    const { data: categoryListData } = useCategoryList();
    const defaultValue: CategoryType[] = [
        {
            authorities: [{ authority: '', authority_id: '', authority_name: '권한 없음' }],
            category_id: '',
            key: '',
            name: '카테고리 없음',
        },
    ];
    const filteredCategory = categoryListData?.filter((category) => !!category.authorities.length);
    const authorityCategory = useMemo(
        () => (!!filteredCategory?.length ? filteredCategory : defaultValue),
        [categoryListData],
    );

    return authorityCategory;
};

export default useAuthorityCategory;
