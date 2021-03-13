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
  Button
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
 
  render(){
    const Data = "some data";
    const obj = {id:1}
    return (
      <View>
        <Login data={Data} obj={obj}></Login>
      </View>
    )
  }
}



export default App;
