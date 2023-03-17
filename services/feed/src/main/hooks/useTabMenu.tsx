import { useMemo, useState } from 'react';
import useCategoryList from '../../common/hooks/useCategoryList';
import { CategoryType } from '../../common/types';

type TabCategoryType = Omit<CategoryType, 'authorities'>;

const initSelectedTabValue: Omit<TabCategoryType, 'authorities'> = {
    category_id: '',
    name: '전체',
    key: '',
};

const useTabMenu = () => {
    const { data: categoryListData } = useCategoryList();
    const [selectedTabValueKey, setSelectedTabValueKey] =
        useState<TabCategoryType>(initSelectedTabValue);

    const onChangeTabValue = (tabMenuItem: string) => {
        if (tabMenuItem === '전체') {
            setSelectedTabValueKey(initSelectedTabValue);
        }
        const changeCategory = categoryListData?.filter(
            (category) => category.name === tabMenuItem,
        )[0];
        setSelectedTabValueKey((state) => changeCategory || state);
    };

    const tabMenuKeys = useMemo(
        () => ['전체', ...(categoryListData?.map((category) => category.name) || [])],
        [categoryListData],
    );

    return { selectedTabValueKey, onChangeTabValue, tabMenuKeys };
};

export default useTabMenu;
