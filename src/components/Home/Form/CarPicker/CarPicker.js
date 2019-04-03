import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

const carPicker = (props) => (
    <TouchableOpacity style={styles.inputContainer} onPress={props.showCarDialogue}>
        <Icon name={props.iconName} size={20} color="#D55C5E" />
        <View style={styles.input}>
            <Text 
                style={{color: props.controls.carType.value === "Desired Car Type" ? "#9B9B9B" : "black"}}>
                {props.controls.carType.value.charAt(0).toUpperCase() + props.controls.carType.value.slice(1)}
            </Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        marginBottom: 10,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
    },
    input: {
        color: "black",
        padding: 5,
        borderBottomWidth: 1,
        borderColor: "#D8D8D8",
        width: "91%"
    },
})

export default carPicker;