import { WebPlugin } from '@capacitor/core';

import type {
  IsKeptAwakeResult,
  IsSupportedResult,
  KeepAwakePlugin,
} from './definitions';

export class KeepAwakeWeb extends WebPlugin implements KeepAwakePlugin {
  private wakeLock: WakeLockSentinel | null = null;
  private readonly _isSupported = 'wakeLock' in navigator;

  public async keepAwake(): Promise<void> {
    if (!this._isSupported) {
      this.throwUnsupportedError();
    }
    if (this.wakeLock) {
      await this.allowSleep();
    }
    this.wakeLock = await navigator.wakeLock.request('screen');
  }

  public async allowSleep(): Promise<void> {
    if (!this._isSupported) {
      this.throwUnsupportedError();
    }
    this.wakeLock?.release();
    this.wakeLock = null;
  }

  public async isSupported(): Promise<IsSupportedResult> {
    const result = {
      isSupported: this._isSupported,
    };
    return result;
  }

  public async isKeptAwake(): Promise<IsKeptAwakeResult> {
    if (!this._isSupported) {
      this.throwUnsupportedError();
    }
    const result = {
      isKeptAwake: !!this.wakeLock,
    };
    return result;
  }

  private throwUnsupportedError(): never {
    throw this.unavailable(
      'Screen Wake Lock API not available in this browser.',
    );
  }
}
