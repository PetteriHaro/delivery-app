import React from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const customButton = (props) => {
    let content = <Text style={styles.buttonText}>{props.children}</Text>
    if (props.notText) {
        content = props.children
    }
    return (
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            {content}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        margin: 10,
        borderRadius: 30,
        backgroundColor: '#A83C3C',
        zIndex: 100
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 14
    }
})

export default customButton;