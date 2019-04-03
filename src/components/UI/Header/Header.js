import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const header = (props) => (
    <Text style={styles.header}>{props.children}</Text>
)

const styles = StyleSheet.create({
    header: {
        fontWeight: "bold",
        fontSize: 25,
        color: "#565656"
    },
})

export default header;