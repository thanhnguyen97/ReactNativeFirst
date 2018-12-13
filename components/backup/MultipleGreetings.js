
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Greeting extends Component {
    render() {
        let greetingString = `

        
        Hello ${ this.props.name }


        `
        return (
             <Text>{greetingString}</Text>
        );
    }
}

export default class MultipleGreetings extends Component {
    render(){
        return (
            <View
                style = { {alignItems: 'center'} }
            >
            <Greeting name="Nguyen Ngoc Thanh"></Greeting>
            <Greeting name="Nguyen Van Tuan"></Greeting>
            
            </View>

        );
    }
}