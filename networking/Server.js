import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View, Alert, Platform } from 'react-native';
const apiGetAllFoods = '//link';
const apiInsertNewFood = '//link';
async function getFoodsFromServer() {
    try {
        let response = await fetch(apiGetAllFoods);
        let responseJson = await response.json();
        return responseJson.data; //list of food data
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}

// send post request to insert new data
async function insertNewFoodServer(params) {
    try {
        let response = await fetch(apiInsertNewFood, {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(params)
        });
        let responseJson = await response.json(); // await is when make done then make continute
        return responseJson.result;
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}

async function updateAFood(params) {
    try {
        let response = await fetch(apiUpdateFood, {
            method: 'PUT',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(params)
        });
        let responseJson = await response.json(); // await is when make done then make continute
        return responseJson.result;
    } catch (error) {
        console.error(`Error is : ${error}`);
        }
    }

export { getFoodsFromServer };
export { insertNewFoodServer };
export { updateAFood };