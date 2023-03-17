import dayjs from 'dayjs';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { ONE_DAY } from '../../constant/classMove';
import dateFormat from '../../utils/function/dateFormat';
import { queryKeys } from '../../utils/queryKeys';
import { getTimeTable } from '../apis';

const timeUnit = ['hour', 'minute', 'second'] as const;

const parseTime = (time: `${string}:${string}:${string}`) => {
    return time
        .split(':')
        .reduce(
            (preTime, curTime, idx) => dayjs(preTime).set(timeUnit[idx], Number(curTime)),
            dayjs(),
        );
};

const useTimeTable = () => {
    const queryKey = queryKeys.getTimeTables(dateFormat());
    const curDate = dayjs();
    const { data: timeTableData } = useQuery(queryKey, getTimeTable, {
        staleTime: ONE_DAY,
    });
    const curTimeData = timeTableData?.times.find(
        (timeData) => parseTime(timeData.end_time).diff(curDate) >= 0,
    );

    return curTimeData?.period;
};

export const prefetchTimeTable = () => {};

export default useTimeTable;
