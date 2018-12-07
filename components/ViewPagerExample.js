//dragging = "move your finger"
//settling = "release your finger"
//idle='do not touch your finger'

import React, { Component } from 'react';
import {Text, View, StyleSheet, ViewPagerAndroid } from 'react-native';

export default class ViewPagerExample extends Component {
    render(){
        return(
            <ViewPagerAndroid  
                style={{ flex:1 }} 
                initialPage ={2}// first page when load
                onPageScroll={(event)=>{
                    // console.log(`offset=${event.nativeEvent.offset}`)
                }}//run this function when scrolling
                onPageScrollStateChanged={(state)=>{
                    console.log(`Scrolling state =${state}`);
                }}//SscrollState depending on your touch
                onPageSelected={(event)=>{
                    console.log(`scrolled to page : ${event.nativeEvent.position}`);
                }}// vua chuyen sang trang nao day
            >
                <View style={{ backgroundColor: '#5f9ea0'}}>
                    <Text style={styles.textStyle}>Screen one</Text> 
                </View>

                <View style={{ backgroundColor: 'purple'}}>
                    <Text style={styles.textStyle}>Screen two</Text> 
                </View>

                <View style={{ backgroundColor: 'green'}}>
                    <Text style={styles.textStyle}>Screen three</Text> 
                </View>

            </ViewPagerAndroid>
        );
    }
}
const styles = StyleSheet.create({
    textStyle: {
        fontSize:20,
        fontWeight: 'bold',
        padding: 15,
        color: 'white',
        textAlign: 'center'
    }
});