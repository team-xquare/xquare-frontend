import { parseTime } from '../../utils/function/parseTime';
import useWeekOutTime from './useWeekOutTime';

const useIsApplyTime = (startTime: string, endTime: string) => {
    const { data: weekOutTime } = useWeekOutTime();

    if (!weekOutTime || !startTime || !endTime) return false;

    const setStartTime = parseTime(startTime);
    const setEndTime = parseTime(endTime);
    if (!setStartTime || !setEndTime) return;
    const enableStartTime = parseTime(weekOutTime.picnic_allow_start_time);
    const enableEndTime = parseTime(weekOutTime.picnic_allow_end_time);
    return !!(setStartTime.diff(enableStartTime) >= 0 || setEndTime.diff(enableEndTime) <= 0);
};

export default useIsApplyTime;
