import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const smallHeader = (props) => (
    <Text style={styles.text}>{props.children}</Text>
)

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: "#565656",
        textAlign: "left",
        fontWeight: "bold",
    },
})

export default smallHeader;