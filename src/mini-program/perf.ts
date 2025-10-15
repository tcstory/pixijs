/* eslint-disable */
// @ts-nocheck

export function now() {
    if (performance && performance.now) {
        return performance.now();
    } else if (wx) {
        return wx.getPerformance().now()
    } else {
        throw new Error('method now is missing');
    }
}
