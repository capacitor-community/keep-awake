import { KeepAwake } from '@capacitor-community/keep-awake';

window.keepAwake = () => {
  KeepAwake.keepAwake();
};

window.allowSleep = () => {
  KeepAwake.allowSleep();
};

window.isSupported = async () => {
  const res = await KeepAwake.isSupported();
  alert(res.isSupported);
};

window.isKeptAwake = async () => {
  const res = await KeepAwake.isKeptAwake();
  alert(res.isKeptAwake);
};
