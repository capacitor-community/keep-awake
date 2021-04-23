export interface KeepAwakePlugin {
  /**
   * Prevent the device from dimming the screen.
   */
  keepAwake(): Promise<void>;
  /**
   * Allow the device to dim the screen.
   */
  allowSleep(): Promise<void>;
}
