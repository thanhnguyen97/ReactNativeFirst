import React, { Component } from 'react';
import {Alert, AppRegistry, View, Image, Text, 
        TouchableHighlight ,
        TouchableNativeFeedback,
        TouchableOpacity,
        TouchableWithoutFeedback,} from 'react-native';

export default class App extends Component {
    _onPressButton = () => {
        alert("You pressed the button");
    }
    render() {
        return( <View style={ {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'yellow',
        } }>
            <TouchableHighlight 
            onPress={this._onPressButton}
             underlayColor='red'
            //  onShowUnderlay={() => {
            //     alert("onShowUnderlay button")
            //  }}
             >
                <View style={ { backgroundColor: 'green'} }>
                    <Image
                        style={{ width: 100, height: 30}}
                    source={require('./images/image_button_highlight.png')}
                    ></Image>
                    {/* <Text style={{
                        color: 'white',
                        padding:20,
                        fontSize: 18
                        }}>
                        Touchablehightlight
                    </Text> */}
                </View>
            </TouchableHighlight>
            <TouchableNativeFeedback
                onPress={this._onPressButton}
                useForeground={true}>
                
                <View style={ {
                        width: 300,
                        height: 50,
                        margin: 20,
                        backgroundColor: 'blue'}}>
                    <Text style={{
                        margin: 10,
                        fontSize: 20,
                        color: 'white',
                        textAlign: 'center'
                    }}> TouchableNativeFeedback
                    </Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableOpacity onPress={this._onPressButton}
                    activeOpacity={0.1}
            >
                <View style={ {
                        width: 300,
                        height: 50,
                        margin: 20,
                        backgroundColor: 'purple'}}>
                    <Text style={{
                        margin: 10,
                        fontSize: 20,
                        color: 'white',
                        textAlign: 'center'
                    }}> TouchableOpacity
                    </Text>
                </View>

            </TouchableOpacity>
            <TouchableWithoutFeedback 
                onPress={
                    this._onPressButton
                }
                onLongPress={
                    () => {
                        alert("onLongPress");
                    }
                }
                onPressIn={
                    () => {
                        alert("onPressIn");
                    }
                }
                onPressOut={
                    () => {
                    alert("onPressOut");
                    }
                }
                disabled={false}
            >
            <View style={ {
                        width: 300,
                        height: 50,
                        margin: 20,
                        backgroundColor: 'purple'}}>
                    <Text style={{
                        margin: 10,
                        fontSize: 20,
                        color: 'white',
                        textAlign: 'center'
                    }}> TouchableOpacity
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        </View> );
     }
}
AppRegistry.registerComponent('FirstProjectReactNative', () => App);