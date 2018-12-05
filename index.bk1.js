import React, { Component } from 'react';
import { AppRegistry, TextInput, View, Text} from 'react-native';

export default class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typedText: 'please type your text',
            typePassword: ''
        };
    }
    render() {
        return (
            <View>
                <TextInput style={
                    {
                        height: 40,
                        margin: 20,
                        padding: 10,
                        borderColor: 'gray',
                        borderWidth: 1
                    }
                }
                keyboardType='email-address'
                placeholder= 'Enter your email'
                placeholderTextColor = 'red'
                autoFocus={true}
                onChangeText={
                    (text) => {
                        this.setState(
                            (previoustate) => {
                                return {
                                   typedText: text 
                                };
                            }
                        );
                    }
                }
            />
            <Text style={ { marginLeft: 20 } }>{this.state.typedText}</Text>

            <TextInput style={
                    {
                        height: 40,
                        margin: 20,
                        padding: 10,
                        borderColor: 'gray',
                        borderWidth: 1
                    }
                }
                keyboardType='default'
                placeholder= 'Enter your password'
                secureTextEntry= {true}

                onChangeText={
                    (text) => {
                        this.setState(
                            (previoustate) => {
                                return {
                                   typePassword: text 
                                };
                            }
                        );
                    }
                }
                />
                {/* <Text>{this.state.typePassword}</Text>  */}
                <TextInput style={
                    {
                        height: 100,
                        margin: 20,
                        padding: 10,
                        borderColor: 'gray',
                        borderWidth: 1
                    }
                }
                multiline = {true}
                borderBottomColor = 'green'
                borderBottomColor= {3}
                editable={true} 
                borderLeftColor = 'green'
                borderBottomColor= {3}
                borderRightColor = 'green'
                borderBottomColor= {3}                
                />
            </View>
        );
    }
}
AppRegistry.registerComponent('FirstProjectReactNative', () => Application);







// /** @format */
// // import React, {Component} from 'react';
// // import {AppRegistry} from 'react-native';
// // import App from './App';
// // import {name as appName} from './app.json';
// // import HelloWorld from './components/HelloWorld';
// // import Robot from './components/Robot';
// // import MultipleGreetings from './components/MultipleGreetings';
// // import TextBlink from './components/TextBlink';
// // import { AppRegistry, StyleSheet, Text, View } from 'react-native';
// // import FixedDimension from './components/FixedDimension';
// // import FlexDimension from './components/FlexDimension';
// import FlexExample from './components/FlexExample';
// import JustifyContentExample from './components/JustifyContentExample';

// // export default class App extends Component {
// //     render() {
// //         return (
// //             <View style= { styles.container }>
// //                 <Text style={styles.firstText}>Hello Cu</Text>
// //                 <Text style={[styles.secondText, styles.firstText]}>Thanhnguyen</Text>
// //                 <Text style={[styles.secondText, styles.secondText]}>Thao</Text>
// //                 <Text style={[styles.secondText, styles.firstText]}>Oanh</Text>
// //             </View>
// //         );
// //     }
// // }
// // const styles = StyleSheet.create({
// //     container: {
// //         marginTop: 20,
// //         marginLeft: 10,
// //         marginRight: 10,
// //         backgroundColor: '#2BB463',
// //     },
// //     firstText: { 
// //         margin: 5, color: 'black'
// //     },
// //     secondText: {
// //         margin: 5,
// //         color: 'yellow',
// //         fontWeight: 'bold',
// //         fontSize: 20,
// //     }
// // });

// AppRegistry.registerComponent('FirstProjectReactNative', () => JustifyContentExample);
