import { parseTime } from '../../utils/function/parseTime';
import useWeekOutTime from './useWeekOutTime';

const useIsInvalidTime = (startTime: string, endTime: string) => {
    const { data: weekOutTime } = useWeekOutTime();

    if (!weekOutTime || !startTime || !endTime) return false;

    const setStartTime = parseTime(startTime);
    const setEndTime = parseTime(endTime);
    if (!setStartTime || !setEndTime) return;

    return !!(setEndTime.diff(setStartTime) >= 0);
};

export default useIsInvalidTime;
