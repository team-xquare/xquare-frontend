export const useApplyItem = () => {
    const ONE_HOUR = 60;
    const FIRST_PERIOD = 8 * ONE_HOUR + 30;
    const EIGHT_PERIOD = 16 * ONE_HOUR + 40;
    const TENTH_PERIOD = 20 * ONE_HOUR + 30;
    const END_PERIOD = 23 * ONE_HOUR + 30;
    const WEEKEND = 11 * ONE_HOUR + 30;

    const date = new Date();
    const day = date.getDay();
    const hour = date.getHours();
    const minute = date.getMinutes();

    const isWeekdays = day !== 0 && day !== 6;
    const time = ONE_HOUR * hour + minute;

    const applyItem = {
        isClassMove: isWeekdays && time >= EIGHT_PERIOD && time <= TENTH_PERIOD,
        isTodayOut: isWeekdays && time >= FIRST_PERIOD && time <= EIGHT_PERIOD,
        isDormitoryStudy: (isWeekdays && time >= TENTH_PERIOD && time <= END_PERIOD) || !isWeekdays,
        isWeekendOut:
            (day <= 5 && day >= 6 && (time >= END_PERIOD || time <= WEEKEND)) ||
            (day <= 6 && day >= 7 && (time >= END_PERIOD || time <= WEEKEND)),
    };

    return applyItem;
};
