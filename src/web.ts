import { WebPlugin } from '@capacitor/core';

import type { KeepAwakePlugin } from './definitions';

export class KeepAwakeWeb extends WebPlugin implements KeepAwakePlugin {
  async keepAwake(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async allowSleep(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }
}
