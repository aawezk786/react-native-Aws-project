import React from 'react';
import {View,Text} from 'react-native';


class Flex extends React.Component {
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:1,backgroundColor:'red'}}>
                    
                </View>
            </View>
        );
    }
}

export default Flex;