package com.pokestack;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;



public class QrScanModule extends ReactContextBaseJavaModule {
    QrScanModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "QrScanModule";
    }

    @ReactMethod
    public void createQrScanEvent(String name, String location) {
        Log.d("QrScanModule", "Create event called with name: " + name
                + " and location: " + location);
    }
}
