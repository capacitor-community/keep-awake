export interface KeepAwakePlugin {
  /**
   * Prevent the device from dimming the screen.
   * 
   * Only available for Android and iOS.
   */
  keepAwake(): Promise<void>;
  /**
   * Allow the device to dim the screen.
   * 
   * Only available for Android and iOS.
   */
  allowSleep(): Promise<void>;
}
