export interface KeepAwakePlugin {
  /**
   * Prevent the device from dimming the screen.
   */
  keepAwake(): Promise<void>;
  /**
   * Allow the device to dim the screen.
   */
  allowSleep(): Promise<void>;
  /**
   * Whether keep awake is supported or not.
   */
  isSupported(): Promise<IsSupportedResult>;
  /**
   * Check if the device is kept awake.
   */
  isKeptAwake(): Promise<IsKeptAwakeResult>;
}

export interface IsSupportedResult {
  isSupported: boolean;
}

export interface IsKeptAwakeResult {
  isKeptAwake: boolean;
}
