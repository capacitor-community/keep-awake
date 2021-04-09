import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(KeepAwakePlugin)
public class KeepAwakePlugin: CAPPlugin {

    @objc func keepAwake(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            if(!UIApplication.shared.isIdleTimerDisabled) {
                UIApplication.shared.isIdleTimerDisabled = true
            }
            call.resolve()
        }
    }

    @objc func allowSleep(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            if(UIApplication.shared.isIdleTimerDisabled) {
                UIApplication.shared.isIdleTimerDisabled = false
            }
            call.resolve()
        }
    }
}
