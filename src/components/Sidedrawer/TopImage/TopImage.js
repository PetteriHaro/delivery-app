import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';
import TopImage from '../../../assets/sidedrawerimage.jpg'

const topImage = (props) => (
    <View style={styles.container}>
        <Image source={TopImage} resizeMode="cover" style={styles.image} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        height: "25%",
        marginBottom: 30
    },
    image: {
        height: "100%",
        width: "100%"
    }
})

export default topImage;