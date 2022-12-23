import { useMemo, useState } from 'react';
import { getKeyFromValue } from '../../utils/getKeyfromValue';
const tabMenuKeys = ['홈', '공지', '동아리', '대나무숲'] as const;

type TabMenuKeysType = typeof tabMenuKeys[number];

const tabMenuKeyToEnglish = {
    홈: 'home',
    공지: 'notice',
    동아리: 'club',
    대나무숲: 'bamboo',
} as const;

type TabMenuValueType = typeof tabMenuKeyToEnglish[TabMenuKeysType];

const useTabMenu = (initValue?: TabMenuValueType) => {
    const [selectedTabValueKey, setSelectedTabValueKey] = useState<TabMenuValueType>(
        initValue || 'home',
    );

    const onChangeTabValue = (tabMenuItem: TabMenuKeysType) => {
        setSelectedTabValueKey(tabMenuKeyToEnglish[tabMenuItem]);
    };

    const tabValue = useMemo(
        () => getKeyFromValue(tabMenuKeyToEnglish, selectedTabValueKey),
        [selectedTabValueKey],
    );

    return { tabValue, onChangeTabValue, selectedTabValueKey, tabMenuKeys };
};

export default useTabMenu;
