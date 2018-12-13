import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Alert, Platform, TouchableHighlight } from 'react-native';
import firebase from 'react-native-firebase';


export default class LoginComponent extends Component {
constructor(props) {
    super(props);
}

render() {
    return (
        <View style={{ flex: 1, marginTop: Platform.OS ==='ios' ? 34 : 0}}>
            <Text style={{color: 'red'}}>Test react-native firebase</Text>

        </View>


    )

    
}

}