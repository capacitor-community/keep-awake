# capacitor-keep-awake

[![npm version](https://badge.fury.io/js/%40boosten%2Fcapacitor-keep-awake.svg)](https://www.npmjs.com/@boosten/capacitor-keep-awake)

Prevent your screen from getting some sleep!

## Installation

```bash
npm i @boosten/capacitor-keep-awake
```

## Configuration

## Example

Check out the example repo: [capacitor-keep-awake-example](https://github.com/Boosten/capacitor-keep-awake-example)

```typescript
import { Plugins } from '@capacitor/core';

@Component({
  template: `
    <button (click)="keepAwake()">keep awake!</button>
    <button (click)="allowSleep()">let me sleep!</button>
  `
})
export class SignupComponent {
  async keepAwake() {
    await Plugins.KeepAwake.keepAwake();
  }

  async allowSleep() {
    await Plugins.KeepAwake.allowSleep();
  }
}
```

### Web

This functionality is not applicable to the browser.

### iOS

No extra steps required 🙂.

### Android

You have to register your plugin in your app main activity. See official [Capacitor docs](https://capacitor.ionicframework.com/docs/plugins/android/#export-to-capacitor)

```java
public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {
      {
        // Additional plugins you've installed go here
        // Ex: add(TotallyAwesomePlugin.class);
        add(KeepAwake.class);
      }
    });
  }
}
```

## Credits

Capacitor version of the plugin: [cordova insommia](https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin).
