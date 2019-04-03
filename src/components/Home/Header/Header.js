import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Platform
} from 'react-native';

const header = (props) => (
    <View style={styles.container}>
        <Text style={styles.header}>Get</Text>
        <Text style={styles.header}>Deliveries</Text>
        <Text style={styles.subtitle}>From Point A to Point B</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        left: 25,
        zIndex: 40,
        ...Platform.select({
            ios: {
                top: 100
            },
            android: {
                top: 80
            }
        })
    },
    header: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#3D3D3D"
    },
    subtitle: {
        marginTop: 20,
        fontSize: 16,
        color: "#565656"
    }
})

export default header;