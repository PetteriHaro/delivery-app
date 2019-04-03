import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


const drawerIcon = (props) => (
    <TouchableOpacity onPress={props.backHandler} style={styles.cornerIcon}>
        <Icon name="chevron-left" color="#5B5B5B" size={35}/>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    cornerIcon: {
        position: "absolute",
        left: 5,
        padding: 8,
        zIndex: 20,
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