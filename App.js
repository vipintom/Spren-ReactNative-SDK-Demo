/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, {Component} from 'react';
 import {StyleSheet, Text, View, Button, TextInput } from 'react-native';
 import engine from 'spren-prediction-engine';
 
 export default class sprenDemo extends Component {
 
   state = {
     nativeResult: "Model Not Loaded",
     deviceId: "",
     closeid: "",
     ti: ""
   }
 
   init = async () => {
     this.setState({ nativeResult: "loading..."})
     try {
       var response = await engine.init("your-api-key-here")
       this.setState({ nativeResult: JSON.stringify(response)})
      } catch(e) {
       this.setState({ nativeResult: e})
     }
   }
 
   evaluate = async () => {
     this.setState({ deviceId: "loading..."})
     try {
       var response = await engine.evaluate(this.state.ti)
       this.setState({ deviceId: JSON.stringify(response)})
     } catch(e) {
       this.setState({ deviceId: e})
     }
   }
 
   close = async () => {
     this.setState({ closeid: "loading..."})
     try {
       var response = await engine.close()
       this.setState({ closeid: JSON.stringify(response)})
     } catch(e) {
       this.setState({ closeid: e})
     }
   }

   text_input = (text) => {
    this.setState({ ti: text })
   }

   render() {
     return (
       <View style={styles.container}>
         <Text style={styles.instructions}>{this.state.nativeResult}</Text>
         <Button
           onPress={this.init}
           title="init()"
           color="#841584"
           accessibilityLabel="Load Model Button"
         />
          <TextInput style = {styles.input}
          underlineColorAndroid = "transparent"
          placeholder = "Enter text"
          placeholderTextColor = "grey"
          autoCapitalize = "none"
          onChangeText = {this.text_input}
          />
          <Text style={styles.instructions}>{this.state.deviceId}</Text>
         <Button
           onPress={this.evaluate}
           title="evaluate()"
           color="#841584"
           accessibilityLabel="Test Model Button"
         />
         <Text style={styles.instructions}>{this.state.closeid}</Text>
         <Button
           onPress={this.close}
           title="close()"
           color="#841584"
           accessibilityLabel="Close Model Button"
         />
       </View>
     );
   }
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
     marginBottom: 5,
   },
   welcome: {
     fontSize: 20,
     textAlign: 'center',
  },
   instructions: {
     textAlign: 'center',
     color: '#333333',
   },
   input: {
    height: 40,
    width:400,
    borderColor: '#7a42f4',
    borderWidth: 1,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
 },
 });
 