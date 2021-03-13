import React from 'react';
import {View,Text, Button} from 'react-native';

const Login = (props) =>{
    function message (){
        alert('Hello im Message Function')
    }
    console.warn(props)
    return (
        <View>
            <Text style={{fontSize:60}}>Login {props.data}</Text>
            <Text style={{fontSize:60}}>Login {props.obj.id}</Text>
            <Button title="Login" onPress={message}></Button>
            
        </View>
    );
}


export default Login;



