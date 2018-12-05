import React, { Component } from 'react';
import {ScrollView, Image, Text, View, TextInput, ViewPagerAndroid } from 'react-native';

export default class ViewPagerExample extends Component {
    render(){
        return(
            <ViewPagerAndroid style={{
                flex:1,
                


            }} iniinitialPage={0}>
            <View style={{
                    backgroundColor: '#5f9ea0',
                    flex: 1,
                    marginTop: 20,
                    justifyContent: 'center',
                    alignItems: "center"
                }}>
                <Text style={{
                        fontSize: 20,
                        padding: 15,
                        color: 'white',
                        textAlign: 'center',
                }}>Screen 1</Text>
                </View>

            </ViewPagerAndroid>
        );
    }
}