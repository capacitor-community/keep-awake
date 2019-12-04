declare module '@capacitor/core' {
  interface PluginRegistry {
    KeepAwake: KeepAwakePlugin;
  }
}

export interface KeepAwakePlugin {
  keepAwake(): Promise<void>;
  allowSleep(): Promise<void>;
}
