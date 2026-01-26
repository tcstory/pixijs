/* eslint-disable */
// @ts-nocheck

export function isMiniProgram()
{
// @ts-expect-error wx is available
    return typeof wx !== 'undefined';
}

export function getPerformance()
{
// @ts-expect-error wx is available
    return wx.getPerformance();
}
