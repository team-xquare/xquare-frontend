import dayjs from 'dayjs';
import { timeUnit } from '../../constant/time';

export const parseTime = (time: string | undefined) => {
    return time
        ?.split(':')
        .reduce(
            (preTime, curTime, idx) => dayjs(preTime).set(timeUnit[idx], Number(curTime)),
            dayjs(),
        );
};
