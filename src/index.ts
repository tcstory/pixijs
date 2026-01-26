import { browserExt } from './environment-browser/browserExt';
import { miniProgramExt } from './environment-browser/miniProgramExt';
import { webworkerExt } from './environment-webworker/webworkerExt';
import { extensions } from './extensions/Extensions';
import './rendering/init';
import './spritesheet/init';
import { isMiniProgram } from '~/mini-program/utils';

export * from './accessibility';
export * from './advanced-blend-modes';
export * from './app';
export * from './assets';
export * from './color';
export * from './compressed-textures';
export * from './culling';
export * from './dom';
export * from './environment';
export * from './environment-browser';
export * from './environment-webworker';
export * from './events';
export * from './extensions';
export * from './filters';
export * from './maths';
export * from './prepare';
export * from './rendering';
export * from './scene';
export * from './spritesheet';
export * from './ticker';
export * from './utils';

if (isMiniProgram())
{
    extensions.add(miniProgramExt);
}
else
{
    extensions.add(browserExt, webworkerExt);
}
