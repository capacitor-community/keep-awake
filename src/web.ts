import { WebPlugin } from '@capacitor/core';
import { KeepAwakePlugin } from './definitions';

export class KeepAwakeWeb extends WebPlugin implements KeepAwakePlugin {
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
