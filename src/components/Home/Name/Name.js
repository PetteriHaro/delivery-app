import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Platform
} from 'react-native';

const name = (props) => (
    <View style={styles.container}>
        <Text style={styles.text}>{props.user.name.split(" ")[0]}</Text>
        <Text style={styles.text}>{props.user.name.split(" ")[1]}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 20,
        right: "5%",
        zIndex: 21,
        alignItems: "flex-end",
        ...Platform.select({
            ios: {
                top: 50
            },
            android: {
                top: 30
            }
        })
    },
    text: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold"
    }
})

export default name;