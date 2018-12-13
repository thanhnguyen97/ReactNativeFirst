import React, { Component } from 'react';
import {View} from 'react-native';

export default class FixedDimension extends Component {
    render(){
        return(
            <View>
                 <View style= { {width:40, height: 50, backgroundColor: 'blue'} }></View>
                <View style= { {width:40, height: 50, backgroundColor: 'red'} }></View>
                <View style= { {width:40, height: 50, backgroundColor: 'cyan'} }></View>
            </View>
                   );
    }
}