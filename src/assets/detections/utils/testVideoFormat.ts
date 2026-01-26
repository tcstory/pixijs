/* eslint-disable no-restricted-globals */
import {
    isMiniProgram,
} from '~/mini-program/utils';

const inWorker = 'WorkerGlobalScope' in globalThis
    && globalThis instanceof (globalThis as any).WorkerGlobalScope;

/**
 * @param mimeType
 * @internal
 */
export function testVideoFormat(mimeType: string): boolean
{
    if (inWorker)
    {
        return false;
    }

    if (isMiniProgram())
    {
        return true;
    }

    const video = document.createElement('video');

    return video.canPlayType(mimeType) !== '';
}
