"use strict";
//ThrottleFunction represents a function that limits how often another function can be called.
//It ensures that the provided function is called at most once within a specified delay.

type ThrottleFunction<T extends (...args: any[]) => void> = {
  (this: ThisParameterType<T>, ...args: Parameters<T>): void;
};
//throttle is a utility function that returns a throttled version of the provided function.
//It limits how frequently the original function can be invoked.
function throttle<T extends (...args: any[]) => void>(
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
}

export default throttle;
