import { useMemo, useState } from 'react';
import useCategoryList from '../../common/hooks/useCategoryList';
import { CategoryType } from '../../common/types';
import { getKeyFromValue } from '../../utils/getKeyfromValue';

const initSelectedTabValue: CategoryType = {
    category_id: '',
    name: '전체',
};

const useTabMenu = () => {
    const { data: categoryListData } = useCategoryList();
    const [selectedTabValueKey, setSelectedTabValueKey] =
        useState<CategoryType>(initSelectedTabValue);

    const onChangeTabValue = (tabMenuItem: string) => {
        if (tabMenuItem === '전체') {
            setSelectedTabValueKey(initSelectedTabValue);
        }
        const changeCategory = categoryListData?.category_list.filter(
            (category) => category.name === tabMenuItem,
        )[0];
        setSelectedTabValueKey((state) => changeCategory || state);
    };

    const tabMenuKeys = useMemo(
        () => ['전체', ...(categoryListData?.category_list.map((category) => category.name) || [])],
        [categoryListData],
    );

    return { selectedTabValueKey, onChangeTabValue, tabMenuKeys };
};

export default useTabMenu;
