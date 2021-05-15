package com.spren;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

import com.spren.predictionlibrary.PredictionEngine;
import com.spren.predictionlibrary.Entities.CloseResult;
import com.spren.predictionlibrary.Entities.PredictionResult;
import com.spren.predictionlibrary.Entities.EngineResult;

import org.tensorflow.lite.DataType;
import org.tensorflow.lite.Interpreter;
import org.tensorflow.lite.Tensor;


public class PredictionEngineModule extends ReactContextBaseJavaModule {
  public static final String REACT_CLASS = "PredictionEngineModule";
  private static ReactApplicationContext reactContext = null;
  private PredictionEngine engine;

  public PredictionEngineModule(ReactApplicationContext context) {
    super(context);
    reactContext = context;
    engine = PredictionEngine.getInstance();
  }

  @Override
  public String getName() {
    return REACT_CLASS;
  }

  @Override 
  public Map<String, Object> getConstants() {
    final Map<String, Object> constants = new HashMap<>();
    return constants;
  }

  @ReactMethod
  public void init(String accessKey, final Promise promise) 
  {
    EngineResult res = engine.init(reactContext, accessKey); 
    promise.resolve(res.getMap());
  }


  @ReactMethod
  public void evaluate(String text, final Promise promise) 
  {
    PredictionResult res = engine.classifyText(text, false);
    promise.resolve(res.getMap());
  }

  @ReactMethod
  public void close(final Promise promise) 
  {
    CloseResult res = engine.close();
    promise.resolve(res.getMap());
  }

}
