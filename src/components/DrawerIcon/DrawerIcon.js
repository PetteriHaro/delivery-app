import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


const drawerIcon = (props) => (
    <TouchableOpacity onPress={props.drawerHandler} style={styles.cornerIcon}>
        <Icon name="menu" color="#5B5B5B" size={30}/>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    cornerIcon: {
        position: "absolute",
        left: 20,
        padding: 8,
        zIndex: 40,
        ...Platform.select({
            ios: {
                top: 40
            },
            android: {
                top: 20
            }
        })
    }
})

export default drawerIcon;