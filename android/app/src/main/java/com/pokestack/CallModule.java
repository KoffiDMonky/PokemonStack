package com.pokestack;

import android.content.Intent;
import android.net.Uri;

import androidx.annotation.NonNull;
import android.util.Log;
import android.view.View;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

public class CallModule extends ReactContextBaseJavaModule {
    CallModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "CallModule";
    }

    @ReactMethod
    public void call(String number){
        Log.d(this.getName(),"calling:"+number);
        ReactApplicationContext context = getReactApplicationContext();
        Intent callIntent = new Intent(Intent.ACTION_CALL,Uri.parse("tel:"+number));
        callIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        context.startActivity(callIntent);
    }
}