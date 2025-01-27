<p align="center"><br><img src="https://user-images.githubusercontent.com/236501/85893648-1c92e880-b7a8-11ea-926d-95355b8175c7.png" width="128" height="128" /></p>
<h3 align="center">Keep Awake</h3>
<p align="center"><strong><code>@capacitor-community/keep-awake</code></strong></p>
<p align="center">
  ⚡️ Capacitor plugin to prevent devices from dimming or locking the screen.
</p>

<p align="center">
  <img src="https://img.shields.io/maintenance/yes/2025?style=flat-square" />
  <a href="https://github.com/capacitor-community/keep-awake/actions?query=workflow%3A%22CI%22"><img src="https://img.shields.io/github/actions/workflow/status/capacitor-community/keep-awake/ci.yml?branch=master&style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/@capacitor-community/keep-awake"><img src="https://img.shields.io/npm/l/@capacitor-community/keep-awake?style=flat-square" /></a>
<br>
  <a href="https://www.npmjs.com/package/@capacitor-community/keep-awake"><img src="https://img.shields.io/npm/dw/@capacitor-community/keep-awake?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/@capacitor-community/keep-awake"><img src="https://img.shields.io/npm/v/@capacitor-community/keep-awake?style=flat-square" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<a href="#contributors-"><img src="https://img.shields.io/badge/all%20contributors-2-orange?style=flat-square" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
</p>

## Maintainers

| Maintainer    | GitHub                                          | Social                                            |
| ------------- | ----------------------------------------------- | ------------------------------------------------- |
| Kevin Boosten | [kevinboosten](https://github.com/kevinboosten) | [@kevinboosten](https://twitter.com/kevinboosten) |
| Robin Genz    | [robingenz](https://github.com/robingenz)       | [@robin_genz](https://twitter.com/robin_genz)     |

## Installation

```shell
npm install @capacitor-community/keep-awake
npx cap sync
```

## Configuration

No configuration required for this plugin.

## Demo

A working example can be found here: [robingenz/capacitor-plugin-demo](https://github.com/robingenz/capacitor-plugin-demo)

## Usage

```typescript
import { KeepAwake } from '@capacitor-community/keep-awake';

const keepAwake = async () => {
  await KeepAwake.keepAwake();
};

const allowSleep = async () => {
  await KeepAwake.allowSleep();
};

const isSupported = async () => {
  const result = await KeepAwake.isSupported();
  return result.isSupported;
};

const isKeptAwake = async () => {
  const result = await KeepAwake.isKeptAwake();
  return result.isKeptAwake;
};
```

## API

<docgen-index>

* [`keepAwake()`](#keepawake)
* [`allowSleep()`](#allowsleep)
* [`isSupported()`](#issupported)
* [`isKeptAwake()`](#iskeptawake)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### keepAwake()

```typescript
keepAwake() => Promise<void>
```

Prevent the device from dimming the screen.

--------------------


### allowSleep()

```typescript
allowSleep() => Promise<void>
```

Allow the device to dim the screen.

--------------------


### isSupported()

```typescript
isSupported() => Promise<IsSupportedResult>
```

Whether keep awake is supported or not.

**Returns:** <code>Promise&lt;<a href="#issupportedresult">IsSupportedResult</a>&gt;</code>

--------------------


### isKeptAwake()

```typescript
isKeptAwake() => Promise<IsKeptAwakeResult>
```

Check if the device is kept awake.

**Returns:** <code>Promise&lt;<a href="#iskeptawakeresult">IsKeptAwakeResult</a>&gt;</code>

--------------------


### Interfaces


#### IsSupportedResult

| Prop              | Type                 |
| ----------------- | -------------------- |
| **`isSupported`** | <code>boolean</code> |


#### IsKeptAwakeResult

| Prop              | Type                 |
| ----------------- | -------------------- |
| **`isKeptAwake`** | <code>boolean</code> |

</docgen-api>

## Changelog

See [CHANGELOG.md](https://github.com/capacitor-community/keep-awake/blob/master/CHANGELOG.md).

## License

See [LICENSE](https://github.com/capacitor-community/keep-awake/blob/master/LICENSE).
