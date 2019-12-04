import { registerWebPlugin, WebPlugin } from '@capacitor/core';
import { KeepAwakePlugin } from './definitions';

export class KeepAwakeWeb extends WebPlugin implements KeepAwakePlugin {
  constructor() {
    super({
      name: 'KeepAwake',
      platforms: ['web']
    });
  }

  async keepAwake(): Promise<void> {
    console.log('KeepAwake does not support web');
    return Promise.resolve();
  }

  async allowSleep(): Promise<void> {
    console.log('KeepAwake does not support web');
    return Promise.resolve();
  }
}

const KeepAwake = new KeepAwakeWeb();

export { KeepAwake };

registerWebPlugin(KeepAwake);
