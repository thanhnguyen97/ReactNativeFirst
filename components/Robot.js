import React, { Component } from 'react';
import { Image } from 'react-native';

export default class Robot extends Component {
    render() {
        const ImageSource = {
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HONDA_ASIMO.jpg/200px-HONDA_ASIMO.jpg"
        };
        return (
            <Image  source={ ImageSource }
                    style={ {width:300, height: 200}}>
            </Image>
        );
    }
}