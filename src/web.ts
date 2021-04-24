import { WebPlugin } from '@capacitor/core';

import type { KeepAwakePlugin } from './definitions';

export class KeepAwakeWeb extends WebPlugin implements KeepAwakePlugin {
  private wakeLock: WakeLockSentinel | null = null;
  private readonly isSupported = 'wakeLock' in navigator;

  public async keepAwake(): Promise<void> {
    if (!this.isSupported) {
      this.throwUnsupportedError();
    }
    if (this.wakeLock) {
      await this.allowSleep();
    }
    this.wakeLock = await navigator.wakeLock.request('screen');
  }

  public async allowSleep(): Promise<void> {
    if (!this.isSupported) {
      this.throwUnsupportedError();
    }
    this.wakeLock?.release();
    this.wakeLock = null;
  }

  private throwUnsupportedError(): never {
    throw this.unavailable(
      'Screen Wake Lock API not available in this browser.',
    );
  }
}
