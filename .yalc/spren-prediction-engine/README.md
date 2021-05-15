
# spren-prediction-engine

## Getting started

`$ npm install spren-prediction-engine`

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.spren.PredictionEngine;` to the imports at the top of the file
  - Add `new PredictionEngine` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-test-lib'
  	project(':react-native-test-lib').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-test-lib/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-test-lib')
  	```