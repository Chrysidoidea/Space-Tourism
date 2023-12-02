type ThrottleFunction<T extends (...args: any[]) => void> = {
    (this: ThisParameterType<T>, ...args: Parameters<T>): void;
};

function throttle<T extends(...args: any[]) => void> (
    callBack: T,
    delay: number
): ThrottleFunction<T> {
    let lastExecTime = 0;

    return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
        const now = Date.now();

        if (now - lastExecTime >= delay) {
            callBack.apply(this, args);
            lastExecTime = now;
        }
    };
};

export default throttle;