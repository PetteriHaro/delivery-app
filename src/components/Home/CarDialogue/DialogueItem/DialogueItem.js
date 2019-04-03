import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const dialogueItem = (props) => (
    <TouchableOpacity onPress={props.onPress}>
        <Text>{props.option}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    },
})

export default dialogueItem;