/* eslint-disable no-restricted-globals */
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

    // @ts-expect-error we temporarily return true for now
    if (wx)
    {
        return true;
    }

    const video = document.createElement('video');

    return video.canPlayType(mimeType) !== '';
}
