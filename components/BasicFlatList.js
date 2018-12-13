import React, { Component } from 'react';
import { RefreshControl, View, Text, FlatList, Image, StyleSheet, Alert, Platform, TouchableHighlight } from 'react-native';
import flatListData from '../data/FlatListData';
import Swipeout from 'react-native-swipeout';
import AddModal from './AddModal';
import EditModal from './EditModal';
// import Swiper from 'react-native-swiper';

import { getFoodsFromServer } from '../networking/Server';

class FlatListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeRowKey: null,
            refreshing: false,
            foodsFromServer: [], 
            item: {}
        };
    }
    componentDidMount() {
        this.refreshDataFromServer();
    }
    refreshDataFromServer = () => {
        this.setState({ refreshing: true });
        getFoodsFromServer().then((foods) => {
            this.setState({ foodsFromServer: foods });
            this.setState({ refreshing: false });
        }).catch((error) => {
            this.setState({ foodsFromServer: [] });
            this.setState({ refreshing: false });
        });
    }
    onRefresh = () => {
        this.refreshDataFromServer();
    }
    refreshFlatListItem = () => {
        this.setState((prevState) => {
                return {
                    numberOfRefresh: prevState.numberOfRefresh + 1
                };
            } 
        );
    }
    render() {
        const swipeSettings = {
            autoClose: true,
            onClose: (setId, rowId, direction) => {
                if(this.state.activeRowKey != null){
                    this.setState({ activeRowKey: null });
                }
            },
            onOpen: (setId, rowId, direction)=>{
                this.setState({ activeRowKey: this.props.item.key});
            },
            right: [
                {
                    onPress: () => {
                        // alert("update");
                        // this.props.parentFlatList.refs.editModal.showEditModal(flatListData[this.props.index], this)
                        let selectedItem = this.state.item.name ? this.state.item : this.props.item;
                        this.props.parentFlatList.refs.editModal.showEditModal(selectedItem, this);
                    },
                    text: 'Edit' , type: 'primary'
                },

                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey;   
                        Alert.alert(
                            'Alert',
                            ' Are you sure you want to delete ?',
                            [
                                {text: 'No', onPress: ()=> console.log('cancel Pressed'), style: 'cancel'},
                                {text: 'Yes', onPress: ()=>{
                                    flatListData.splice(this.props.index, 1);
                                    //Refresh FlatList ! 
                                this.props.parentFlatList.refreshFlatList(deletingRow);
                                }},
                            ],
                            { cancelable: true }
                        );
                   },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        };
        return (
           <Swipeout {...swipeSettings}>
                 <View>
                    <View style = {{
                        flex: 1,
                        flexDirection: 'row',
                        // backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen': 'tomato'
                        backgroundColor: 'mediumseagreen'
                    }}>
                        <Image
                            source={{uri: 'https://' + this.props.item.imageUrl}}
                            style={{width: 100, height: 100, margin: 5}}
                        >
                        </Image>
                        <View style={{ 
                            flex: 1,
                            flexDirection: 'column'}}>
                            <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                            <Text style={styles.flatListItem}>{this.props.item.girlDescription}</Text>
                        </View>
                    </View>
                    <View style={{ 
                        height: 1,
                        backgroundColor: 'white'
                    }}>
                        
                    </View>
                </View>
            </Swipeout>
        );
    }
}
const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16,
    }
});

export default class BasicFlatList extends Component {
    constructor(props) {
        super(props);     
        this.state = ({
            deletedRowKey: null,            
        });
        this._onPressAdd = this._onPressAdd.bind(this);
    }
    refreshFlatList = (activeKey) => {
        this.setState((prevState) => {
            return {
                deletedRowKey: activeKey
            };
        });
        this.refs.flatList.scrollToEnd();
    }
    _onPressAdd (){
        // alert('you add item');
        this.refs.addModal.showAddModal();
    }
    render(){
        return(
            <View style={{flex:1, marginTop: Platform.OS === 'ios' ? 34 : 0}}>
                <View style={{
                    backgroundColor: 'tomato',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: "center",
                    height: 64
                }}>
                <TouchableHighlight style={{
                    marginTop: 10,
                    marginRight: 10
                }}
                underlayColor='tomato'
                onPress= {this._onPressAdd}>
                    <Image style={{width: 35, height: 35}}
                            source={require('../images/icon_add.png')}
                    />
                </TouchableHighlight>

                </View>
                    <FlatList 
                        ref={"flatList"}
                        // data={flatListData}
                        data ={this.state.foodsFromServer}
                        renderItem={({item, index})=>{
                            // console.log(`Item=${JSON.stringify(item)}, index=${index}`);
                            return(
                                <FlatListItem item={item} index={index} parentFlatList={this}>
                                </FlatListItem>);
                        }}
                        keyExtractor= {(item, index) => item.name}
                        refreshControl={
                            <RefreshControl
                                refreshing={ this.state.refreshing}
                                onRefresh={this.onRefresh}
                            ></RefreshControl>
                            
                        }
                        >
                    </FlatList>
                    <AddModal ref ={'addModal'} parentFlatList={this}>
                    
                    </AddModal>
                    <EditModal ref={'editModal'} parentFlatList={this}>

                    </EditModal>
            </View>
        );
    }
}