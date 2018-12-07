import React, { Component } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Alert} from 'react-native';
import flatListData from '../data/FlatListData';
// import Swipeout from 'react-native-swipe-out';
import Swiper from 'react-native-swiper';

class FlatListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeRowKey: null
        };
    }
    render() {
        const swipeSettings = {
            autoClose: true,
            onClose: (setId, rowId, direction)=>{
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
                        Alert.alert(
                            'Alert',
                            ' Are you sure you want to delete ?',
                            [
                                {text: 'No', onPress: ()=> console.log('cancel Pressed'), style: 'cancel'},
                                {text: 'Yes', onPress: ()=>{
                                    flatListData.splice(this.props.index, 1);
                                }},
                            ],
                            { cancelable: true }
                        );
                   },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index,
            setId: 1
        };
        return (
           <Swiper {...swipeSettings}>
                 <View>
                    <View style = {{
                        flex: 1,
                        flexDirection: 'row',
                        // backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen': 'tomato'
                        backgroundColor: 'mediumseagreen'
                    }}>
                        <Image
                            source={{uri: this.props.item.imageUrl}}
                            style={{width: 100, height: 100, margin: 5}}
                        >
                        </Image>
                        <View style={{ 
                            flex: 1,
                            flexDirection: 'column'}}>
                            <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                            <Text style={styles.flatListItem}>{this.props.item.foodDescription}</Text>
                        </View>
                    </View>
                    <View style={{ 
                        height: 1,
                        backgroundColor: 'white'
                    }}>
                        
                    </View>
                </View>
            </Swiper>
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
    render(){
        return(
            <View style={{flex:1, marginTop: 22}}>
                <FlatList 
                    data={flatListData}
                    renderItem={({item, index})=>{
                        // console.log(`Item=${JSON.stringify(item)}, index=${index}`);
                        return(
                            <FlatListItem item={item} index={index}>
                            </FlatListItem>);
                    }}>
                </FlatList>
            </View>
        );
    }
}