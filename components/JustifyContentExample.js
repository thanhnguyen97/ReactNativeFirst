import React, { Component } from 'react';
import { View } from 'react-native';

export default class JustifyContentExample extends Component {
    render(){
        return(
            <View style={ {
                backgroundColor: 'black',
                height: 500,
                flex: 1, 
                flexDirection: 'column',
                // justifyContent: 'flex-start'
                justifyContent: 'flex-start',
                // justifyContent: 'space-between',
                // justifyContent: 'space-around',
                alignItems: 'stretch'
                 
                 } }>
                 <View style={ {height: 50, backgroundColor: 'mediumaquamarine', marginTop: 5} }></View>
                 <View style={ { height: 50, backgroundColor: 'red', marginTop: 10} }></View>
                 <View style={ {width: 50, height: 50, backgroundColor: 'yellow'} }></View>
            </View>
                   
        );
    }
}