import { useQuery } from 'react-query';
import { queryKeys } from '../../utils/queryKeys';
import { getMealList } from '../api';

const useMealList = (year: number, month: number) => {
    const monthMealKey = queryKeys.getMealList(year, month);
    return useQuery(monthMealKey, () => getMealList(year, month));
};

export default useMealList;
