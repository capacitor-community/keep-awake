package com.getcapacitor.community.keepawake;

import android.view.Window;
import android.view.WindowManager;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "KeepAwake")
public class KeepAwakePlugin extends Plugin {

    @PluginMethod
    public void keepAwake(final PluginCall call) {
        getBridge()
            .executeOnMainThread(() -> {
                Window window = getActivity().getWindow();
                window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
                call.resolve();
            });
    }

    @PluginMethod
    public void allowSleep(final PluginCall call) {
        getBridge()
            .executeOnMainThread(() -> {
                Window window = getActivity().getWindow();
                window.clearFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
                call.resolve();
            });
    }

    @PluginMethod
    public void isSupported(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("isSupported", true);
        call.resolve(ret);
    }

    @PluginMethod
    public void isKeptAwake(final PluginCall call) {
        getBridge()
            .executeOnMainThread(() -> {
                // use the "bitwise and" operator to check if FLAG_KEEP_SCREEN_ON is on or off
                // credits: https://stackoverflow.com/a/24214209/9979122
                int flags = getActivity().getWindow().getAttributes().flags;
                boolean isKeptAwake = (flags & WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON) != 0;

                JSObject ret = new JSObject();
                ret.put("isKeptAwake", isKeptAwake);
                call.resolve(ret);
            });
    }
}
