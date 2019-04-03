import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';

const topImage = (props) => (
    <View style={[styles.container, {height: props.height}]}>
        <Image source={props.src} resizeMode="cover" style={styles.image} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginBottom: 20 
    },
    image: {
        height: "100%",
        width: "100%"
    }
})

export default topImage;