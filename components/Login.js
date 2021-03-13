import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';



// const Login = (props) =>{
//     function message (){
//         alert('Hello im Message Function')
//     }
//     // console.warn(props)
//     return (
//         <View>
//             <TextInput placeholder="Enter Name" onChangeText={(text)=>{}}></TextInput>
//             {/* <Text style={{fontSize:60}}>Login {props.data}</Text>
//             <Text style={{fontSize:60}}>Login {props.obj.id}</Text> */}
//             {/* <Button title="Login" onPress={message}></Button> */}

//         </View>
//     );
// }
class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            password: "",
            email: ""
        }
    }
    submit() {
        console.warn("all values",this.state)
    }
    render() {
        return (
            <View>
                <TextInput placeholder="Enter Name"
                     style={styles.textbox}
                    onChangeText={(text) => { this.setState({ name: text }) }}></TextInput>

                <TextInput placeholder="Enter password"
                     style={styles.textbox}
                     secureTextEntry={true}
                    onChangeText={(text) => { this.setState({ password: text }) }}></TextInput>

                <TextInput placeholder="Enter Email"
                     style={styles.textbox}
                    onChangeText={(text) => { this.setState({ email: text }) }}></TextInput>

                <Button title="Submit" onPress={() => { this.submit() }}></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textbox:{
        borderColor:'skyblue',
        borderWidth :2,
        padding : 10,
        marginHorizontal:20,
        marginVertical:25
    }
})


export default Login;



