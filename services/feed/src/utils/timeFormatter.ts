const ONE_SEC = 1000;
const ONE_MIN = 60 * ONE_SEC;
const ONE_HOUR = 60 * ONE_MIN;
const ONE_DAY = 24 * ONE_HOUR;
const ONE_WEEK = 7 * ONE_DAY;

export const timeFormatter = (dateString: string) => {
    const currentDate = new Date();
    const stdDate = new Date(dateString) || new Date();

    const diff = currentDate.getTime() - stdDate.getDate();
    if (diff < ONE_MIN) {
        return '방금 전';
    } else if (diff < ONE_HOUR) {
        return `${Math.floor(diff / ONE_MIN)}분 전`;
    } else if (diff < ONE_DAY) {
        return `${Math.floor(diff / ONE_HOUR)}시간 전`;
    } else if (diff < 2 * ONE_DAY) {
        return '하루 전';
    } else if (diff < 3 * ONE_DAY) {
        return '이틀 전';
    } else if (diff < ONE_WEEK) {
        return `${Math.floor(diff / ONE_DAY)}`;
    } else {
        return `${stdDate.getMonth() + 1}월 ${stdDate.getDate()}일`;
    }
};
