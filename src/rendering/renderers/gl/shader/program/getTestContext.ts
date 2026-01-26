import { DOMAdapter } from '../../../../../environment/adapter';

import type { GlRenderingContext } from '../../context/GlRenderingContext';

let context: GlRenderingContext;

/**
 * returns a little WebGL context to use for program inspection.
 * @private
 * @returns {WebGLRenderingContext} a gl context to test with
 */
export function getTestContext(): GlRenderingContext
{
    if (!context || context?.isContextLost())
    {
        const adapter = DOMAdapter.get();
        let canvas = null;

        if (typeof adapter.createCanvasOfWebGL === 'function')
        {
            canvas = adapter.createCanvasOfWebGL();
        }
        else
        {
            canvas = adapter.createCanvas();
        }

        context = canvas.getContext('webgl', {}) as GlRenderingContext;
    }

    return context;
}
