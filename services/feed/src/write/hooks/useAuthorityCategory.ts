import { useMemo } from 'react';
import useCategoryList from '../../common/hooks/useCategoryList';
import { CategoryType } from '../../common/types';

const useAuthorityCategory = () => {
    const { data: categoryListData } = useCategoryList();
    const defaultValue: CategoryType[] = [
        {
            authorities: [{ authority: '', authority_id: '', authority_name: '' }],
            category_id: '',
            key: '',
            name: '',
        },
    ];
    const filteredCategory = categoryListData?.filter((category) => !!category.authorities.length);
    const authorityCategory = useMemo(() => filteredCategory || defaultValue, [categoryListData]);

    return authorityCategory;
};

export default useAuthorityCategory;
