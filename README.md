<p align="center"><br><img src="https://user-images.githubusercontent.com/236501/85893648-1c92e880-b7a8-11ea-926d-95355b8175c7.png" width="128" height="128" /></p>
<h3 align="center">keep-awake</h3>
<p align="center"><strong><code>@capacitor-community/keep-awake</code></strong></p>
<p align="center">
  Capacitor community plugin to prevent your screen from getting some sleep!
</p>

<p align="center">
  <img src="https://img.shields.io/maintenance/yes/2020?style=flat-square" />
  <a href="https://github.com/capacitor-community/keep-awake/actions?query=workflow%3A%22CI%22"><img src="https://img.shields.io/github/workflow/status/capacitor-community/keep-awake/CI?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/@capacitor-community/keep-awake"><img src="https://img.shields.io/npm/l/@capacitor-community/keep-awake?style=flat-square" /></a>
<br>
  <a href="https://www.npmjs.com/package/@capacitor-community/keep-awake"><img src="https://img.shields.io/npm/dw/@capacitor-community/keep-awake?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/@capacitor-community/keep-awake"><img src="https://img.shields.io/npm/v/@capacitor-community/keep-awake?style=flat-square" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<a href="#contributors-"><img src="https://img.shields.io/badge/all%20contributors-0-orange?style=flat-square" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
</p>

## Maintainers

| Maintainer    | GitHub                                | Social                                    |
| ------------- | ------------------------------------- | ----------------------------------------- |
| Kevin Boosten | [boosten](https://github.com/boosten) | [@Boostuh1](https://twitter.com/Boostuh1) |

## Installation

```bash
npm i @capacitor-community/keep-awake
```

## Configuration

### iOS

No extra steps required 🙂.

### Android

You have to register your plugin in your app main activity. See official [Capacitor docs](https://capacitor.ionicframework.com/docs/plugins/android/#export-to-capacitor)

```java
import com.getcapacitor.community.keepawake.KeepAwake;

public class MainActivity extends BridgeActivity {

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(
        savedInstanceState,
        new ArrayList<Class<? extends Plugin>>() {

          {
            // Additional plugins you've installed go here
            // Ex: add(TotallyAwesomePlugin.class);
            add(KeepAwake.class);
          }
        }
      );
  }
}

```

## Usage

```typescript
import { Plugins } from '@capacitor/core';

@Component({
  template: `
    <button (click)="keepAwake()">keep awake!</button>
    <button (click)="allowSleep()">let me sleep!</button>
  `,
})
export class AppComponent {
  async keepAwake() {
    await Plugins.KeepAwake.keepAwake();
  }

  async allowSleep() {
    await Plugins.KeepAwake.allowSleep();
  }
}
```

## Credits

Capacitor version of the plugin: [cordova insommia](https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin).
