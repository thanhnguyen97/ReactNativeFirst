/** @format */
// import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
// import HelloWorld from './components/HelloWorld';
// import Robot from './components/Robot';
// import MultipleGreetings from './components/MultipleGreetings';
// import TextBlink from './components/TextBlink';
// import { AppRegistry, StyleSheet, Text, View } from 'react-native';
// import FixedDimension from './components/FixedDimension';
// import FlexDimension from './components/FlexDimension';
import FlexExample from './components/FlexExample';

// export default class App extends Component {
//     render() {
//         return (
//             <View style= { styles.container }>
//                 <Text style={styles.firstText}>Hello Cu</Text>
//                 <Text style={[styles.secondText, styles.firstText]}>Thanhnguyen</Text>
//                 <Text style={[styles.secondText, styles.secondText]}>Thao</Text>
//                 <Text style={[styles.secondText, styles.firstText]}>Oanh</Text>
//             </View>
//         );
//     }
// }
// const styles = StyleSheet.create({
//     container: {
//         marginTop: 20,
//         marginLeft: 10,
//         marginRight: 10,
//         backgroundColor: '#2BB463',
//     },
//     firstText: { 
//         margin: 5, color: 'black'
//     },
//     secondText: {
//         margin: 5,
//         color: 'yellow',
//         fontWeight: 'bold',
//         fontSize: 20,
//     }
// });

AppRegistry.registerComponent('FirstProjectReactNative', () => FlexExample);
