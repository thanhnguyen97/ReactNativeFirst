import React, { Component } from 'react';
import { Text } from 'react-native';

export default class HelloWorld extends Component {
    render(){
        let greeting = `
        
        
        Hello world ! my name is Thanh`;

        return (
            <Text>{ greeting }</Text>
        );
    }
}