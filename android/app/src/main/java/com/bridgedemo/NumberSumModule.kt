package com.bridgedemo;
import android.util.Log
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class NumberSumModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "NumberSumModule"
    }

    @ReactMethod
    fun calculateSum(num1: Double, num2: Double, promise: Promise) {
       Log.d("adding","aaa")
        try {
            val sum = num1 + num2 + 10
            promise.resolve(sum)
        } catch (e: Exception) {
            promise.reject("CALCULATION_ERROR", "Error performing calculation", e)
        }
    }
}