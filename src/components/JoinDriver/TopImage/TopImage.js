import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';
import JoinDriver from '../../../assets/joindriver.jpg'

const topImage = (props) => (
    <View style={styles.container}>
        <Image source={JoinDriver} resizeMode="cover" style={styles.image} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        height: "30%",
        width: "100%",
        marginBottom: 20 
    },
    image: {
        height: "100%",
        width: "100%"
    }
})

export default topImage;