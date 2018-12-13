import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Platform } from 'react-native';

class LifeCycle extends Component {
    constructor(props) {//1 component
        super(props) 
        console.log(`${Date.now()}. This is constructor`);
        this.state = {
            numberOfRefresh: 0
        };
        setInterval(() => {
            this.setState(previousState => {
                return { numberOfRefresh: previousState.numberOfRefresh + 1 };
            });

        }, 5000);
    }
    componentWillMount(){// 2 component
        console.log(`${Date.now()}. This is componentWillMount`);
    }
    componentDidMount(){// 4 component
        console.log(`${Math.floor(Date.now())}. This is componentDidMount`);
    }
    componentWillUnmount(){// 5 component
        console.log(`${Math.floor(Date.now())}. This is componentwillUnMount`);
    }

    shouldComponentUpdate() {// when state changes, 1
        console.log(`${Date.now()}. This is shouldComponentUpdate`);
        return true;
    }
    componentWillUpdate() {// 2 state
        console.log(`${Date.now()}. This is componentWillUpdate`);
    }
    componentDidUpdate() { // 4 state
        console.log(`${Date.now()}. This is componentDidUpdate`);
    }

    render() {// 3 component // 3 state
        console.log(`${Math.floor(Date.now())}. This is render function`);
        let textToDisplay =`Number of refres: ${this.state.numberOfRefresh}`;
        return (
            <View style ={{
                flex: 1, 
                marginTop: 100
            }}>
            <Text>LifeCycle test</Text>
            <Text>
                {textToDisplay}
            </Text>
            </View>
        );
    }
}
export default class LifeCycleComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        var lifeCycle = <LifeCycle propA='abc'></LifeCycle>;
        return (
            <View>
                {lifeCycle}

            </View>

        );
    }
}