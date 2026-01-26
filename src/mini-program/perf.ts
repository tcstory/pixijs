/* eslint-disable */
// @ts-nocheck
import {
    isMiniProgram,
    getPerformance,
} from './utils';

export function now() {
    if (typeof performance !== "undefined" && performance !== null && performance.now) {
        return performance.now();
    } else if (isMiniProgram()) {
        return getPerformance().now()
    } else {
        throw new Error('method now is missing');
    }
}
