/* eslint-disable */
// @ts-nocheck

export function now() {
    if (typeof performance !== "undefined" && performance !== null && performance.now) {
        return performance.now();
    } else if (typeof wx !== 'undefined') {
        return wx.getPerformance().now()
    } else {
        throw new Error('method now is missing');
    }
}
