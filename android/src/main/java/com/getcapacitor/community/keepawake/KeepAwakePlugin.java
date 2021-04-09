package com.getcapacitor.community.keepawake;

import android.view.Window;
import android.view.WindowManager;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "KeepAwake")
public class KeepAwakePlugin extends Plugin {

    @PluginMethod
    public void keepAwake(final PluginCall call) {
        getBridge()
            .executeOnMainThread(
                new Runnable() {
                    @Override
                    public void run() {
                        Window window = getActivity().getWindow();
                        window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
                        call.resolve();
                    }
                }
            );
    }

    @PluginMethod
    public void allowSleep(final PluginCall call) {
        getBridge()
            .executeOnMainThread(
                new Runnable() {
                    @Override
                    public void run() {
                        Window window = getActivity().getWindow();
                        window.clearFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
                        call.resolve();
                    }
                }
            );
    }
}
