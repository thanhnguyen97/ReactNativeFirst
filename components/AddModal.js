import React, { Component } from 'react';
import { Text, Dimensions, Platform, TextInput } from 'react-native';
import flatListData from '../data/FlatListData';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';

var screen = Dimensions.get('window');
export default class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state={
            newGirlName:        '',
            newGirlDescription: ''
        };
    }
    showAddModal = () => {
        this.refs.myModal.open();
    }
    generateKey = (numberOfCharacters) => {
        return require('random-string')({length: numberOfCharacters});        
    }
    render () {
        return (
            <Modal
             ref={"myModal"}
             style={{
                justifyContent: 'center',
                borderRadius: Platform.OS === 'ios' ? 30 : 0,
                shadowRadius : 10,
                width: screen.width - 80,
                height: 280
            }}
            position = 'center'
            backdrop = {true}
            onClosed ={()=>{
                // alert("Modal closed");
            }}>
            <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 40
                }}>New girl's information
            </Text>
            <TextInput
                style={{
                    height: 40,
                    borderBottomColor: 'gray',
                    marginLeft: 38,
                    marginRight: 30,
                    marginTop: 20,
                    marginBottom: 10,
                    borderBottomWidth: 1
                }}
                onChangeText={(text) => this.setState({ newGirlName: text })}
                placeholder='Enter new girl is name'
                value={this.state.newGirlName}
            />
            <TextInput
                style={{
                    height: 40,
                    borderBottomColor: 'gray',
                    marginLeft: 38,
                    marginRight: 30,
                    marginTop: 20,
                    marginBottom: 10,
                    borderBottomWidth: 1
                }}
                onChangeText={(text) => this.setState({ newGirlDescription: text })}
                placeholder="Enter new girl's description"
                value={this.state.newGirlDescription}
            />
            <Button style={{ fontSize: 18, color : 'white'}}
                containerStyle={{
                    padding: 8,
                    marginLeft: 78,
                    marginRight: 70,
                    height: 40,
                    borderRadius: 6,
                    backgroundColor: 'mediumseagreen'
                }}
                onPress={() => {
                    if(this.state.newGirlName.length == 0 || this.state.newGirlDescription.length == 0){
                        alert("you must enter girl's name and description");
                        return;
                    }
                    const newKey = this.generateKey(24);
                    const newGirl = {
                        "key" : newKey,
                        "name": this.state.newGirlName,
                        "imageUrl" : "https://i.pinimg.com/236x/b7/9a/ec/b79aecd4b47f8f00eda1d352cfe371b7--nice.jpg",
                        "girlDescription": this.state.newGirlDescription
                    };
                    flatListData.push(newGirl);    
                        this.props.parentFlatList.refreshFlatList(newKey);                                
                        this.refs.myModal.close();      
                }}>
                Save
            </Button>
            </Modal>
        )
    }
}