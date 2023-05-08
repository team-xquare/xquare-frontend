export function throttle(callback: () => void, wait: number = 300) {
    let waiting = true;
    return function () {
        if (waiting) {
            callback();
            waiting = false;
            setTimeout(() => {
                waiting = true;
            }, wait);
        }
    };
}
