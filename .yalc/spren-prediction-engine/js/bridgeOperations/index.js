import { NativeModules } from 'react-native';
import evaluate from './evaluate';
import close from './close'
import init from './init'

const bridge = NativeModules.PredictionEngineModule;

export default {
  init: (accessKey) => init(bridge, accessKey),
  evaluate: (text) => evaluate(bridge, text),
  close: () => close(bridge),
};
