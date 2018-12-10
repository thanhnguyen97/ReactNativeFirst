import React, { Component } from 'react';
import { Text, Dimensions, Platform, TextInput } from 'react-native';
import flatListData from '../data/FlatListData';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';

var screen = Dimensions.get('window');
export default class EditModal extends Component {
    constructor(props) {
        super(props);
        this.state={
            girlName:        '',
            girlDescription: ''
        };
    }
    showEditModal = (editingGirl, flatListItem) => {
        console.log(`editingFood= ${JSON.stringify(editingGirl)}`)
        this.setState({
            key: editingGirl.key,
            girlName: editingGirl.name,
            girlDescription: editingGirl.girlDescription,
            flatListItem: flatListItem
        });
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
                }}>girl's information
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
                onChangeText={(text) => this.setState({ girlName: text })}
                placeholder='Enter girl is name'
                value={this.state.girlName}
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
                onChangeText={(text) => this.setState({ girlDescription: text })}
                placeholder="Enter girl's description"
                value={this.state.girlDescription}
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
                    if(this.state.girlName.length == 0 || this.state.girlDescription.length == 0){
                        alert("you must enter girl's name and description");
                        return;
                    }    
                     //update exitsting girl           
                     var foundIndex = flatListData.findIndex(item => this.state.key == item.key);           
                     if(foundIndex < 0){
                         return;
                     }  
                     flatListData[foundIndex].name = this.state.girlName;
                     flatListData[foundIndex].textAlign = this.state.girlDescription;
                     this.state.flatListItem.refreshFlatListItem();
                     this.refs.myModal.close();      
                }}>
                Save
            </Button>
            </Modal>
        )
    }
}