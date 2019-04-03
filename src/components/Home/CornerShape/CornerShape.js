import React from 'react';
import {
    View,
    StyleSheet,

} from 'react-native';

const corderShape = (props) => (
    <View style={styles.container}>
    </View>
)

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: -420,
        left: "27%",
        width: "145%",
        height: 600,
        backgroundColor: "#D55C5E",
        zIndex: 20,
        borderBottomLeftRadius: 4000,
        borderBottomRightRadius: 4000
    },
})

export default corderShape;