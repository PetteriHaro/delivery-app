import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const breadText = (props) => (
    <Text style={[styles.text, {textDecorationLine: props.textDecorationLine}]}>{props.children}</Text>
)

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        color: "#333333",
        textAlign: "left",
    },
})

export default breadText;