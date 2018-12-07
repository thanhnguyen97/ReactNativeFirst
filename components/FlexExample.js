import React, { Component } from 'react';
import { View } from 'react-native';

export default class FlexExample extends Component {
    render(){
        return(
            <View style={ {
                flex: 1, 
                flexDirection: 'column',
                margin:20
                 
                 } }>
                 <View style={ {width: 50, height: 50, backgroundColor: 'mediumaquamarine', marginTop: 5} }></View>
                 <View style={ {width: 50, height: 50, backgroundColor: 'red', marginTop: 10} }></View>
                 <View style={ {width: 50, height: 50, backgroundColor: 'yellow'} }></View>
            </View>
                   
        );
    }
}