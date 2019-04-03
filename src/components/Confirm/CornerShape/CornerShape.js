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
        bottom: -400,
        left: "20%",
        width: "200%",
        height: 650,
        backgroundColor: "#D55C5E",
        zIndex: -20,
        borderTopLeftRadius: 4000,
        borderTopRightRadius: 4000
    },
})

export default corderShape;