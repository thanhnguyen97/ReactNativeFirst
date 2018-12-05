import React, { Component } from 'react';
import {ScrollView, Image, Text, View, TextInput, Dimensions } from 'react-native';

export default class VerticalScrollView extends Component {
    render(){
        let screenWidth = Dimensions.get('window').width;
        return(
        <ScrollView 
            maximumZoomScale={3}
            minimumZoomScale={0.2}
            keyboardDismissMode='on-drag'
            contentContainerStyle={{paddingLeft: 20}}>

            <Image source={require('../images/girlXinh.jpg')}
                   style={{ width: screenWidth, height: screenWidth * 350 / 500 , marginTop: 20}}>
            </Image>

            <Text style={{
                fontSize: 20,
                padding: 15,
                color: 'white',
                textAlign: 'center',
                backgroundColor: 'purple'
            }}> Wow! beautiful girl :D 
            </Text>

            <TextInput style={{padding:10, margin: 10, borderWidth: 1}}
                       placeholder='Comment about her !!'>
            </TextInput>

            <View>
                <Text style={{
                    fontSize: 20,
                    padding: 15,
                    color: 'white',
                    textAlign: 'center',
                    backgroundColor: 'green'
                }}> my name is Thanh Nguyen.
                </Text>
            </View>

            <Image source={require('../images/girlXinh.jpg')}
                style={{ width: screenWidth, height: screenWidth * 350 / 500 , marginTop: 20}}>
            </Image>

            <Image source={require('../images/girlXinh.jpg')}
            style={{ width: screenWidth, height: screenWidth * 350 / 500 , marginTop: 20}}>
            </Image>
        
         </ScrollView>);
    }
}