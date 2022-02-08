export function debounce(func, delay) {
    let timer;

    return () => {
        const context = this;
        const args = arguments;

        clearInterval(timer);
        timer = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}

export function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}
