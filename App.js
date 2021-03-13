/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput
} from 'react-native';
import Login from './components/Login';
// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const App = () => {
//     return (
//       <View>
//      {/* <Text>Hello React Native</Text> */}
//      <Login></Login>
//       </View>
//     );
//  };
class App extends React.Component{
 constructor(){
   super();
   this.state={
     data : "Some Data",
     name : ""
   }
 }
 test(e){
  this.setState({name:""})
 }
  render(){
    const Data = "some data";
    const obj = {id:1}
    return (
      <View>
        <Login></Login>
        {/* <Text style={[styles.colors,styles.fonts]}>{this.state.name}</Text>
        <TextInput placeholder={'Enter Your Name'} onChangeText={(e)=>{this.setState({name:e})}}></TextInput>
        <Button title="Submit" onPress={()=>{alert(this.state.name)}}></Button> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  colors : {
    color : 'red',
    backgroundColor : 'yellow'
  },
  fonts:{
    fontSize: 30
  }
})



export default App;
