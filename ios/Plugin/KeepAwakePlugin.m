#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(KeepAwakePlugin, "KeepAwake",
           CAP_PLUGIN_METHOD(keepAwake, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(allowSleep, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(isSupported, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(isKeptAwake, CAPPluginReturnPromise);
)
