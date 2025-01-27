import { WebPlugin } from '@capacitor/core';

import type { IsKeptAwakeResult, IsSupportedResult, KeepAwakePlugin } from './definitions';

export class KeepAwakeWeb extends WebPlugin implements KeepAwakePlugin {
  private wakeLock: WakeLockSentinel | null = null;
  private readonly _isSupported = typeof navigator !== 'undefined' && 'wakeLock' in navigator;

  private handleVisibilityChange = () => {
    if (document.visibilityState === 'visible') this.keepAwake();
  };

  public async keepAwake(): Promise<void> {
    if (!this._isSupported) {
      this.throwUnsupportedError();
    }
    if (this.wakeLock) {
      await this.allowSleep();
    }
    this.wakeLock = await navigator.wakeLock.request('screen');
    document.addEventListener('visibilitychange', this.handleVisibilityChange);
    document.addEventListener('fullscreenchange', this.handleVisibilityChange);
  }

  public async allowSleep(): Promise<void> {
    if (!this._isSupported) {
      this.throwUnsupportedError();
    }
    this.wakeLock?.release();
    this.wakeLock = null;
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);
    document.removeEventListener('fullscreenchange', this.handleVisibilityChange);
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
    throw this.unavailable('Screen Wake Lock API not available in this browser.');
  }
}
