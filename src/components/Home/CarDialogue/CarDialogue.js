import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import DialogueItem from './DialogueItem/DialogueItem';

const carDialogue = (props) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={props.closeDialogue} style={styles.closeButton}>
            <Icon name="x" size={25} color="#565656" />
        </TouchableOpacity>
        <DialogueItem 
            onPress={() => props.chooseCar("passengerCar")}
            option="Passenger Car" />
        <DialogueItem 
            onPress={() => props.chooseCar("smallVan")}
            option="Small Van" />
        <DialogueItem 
            onPress={() => props.chooseCar("largeVan")}
            option="Large Van" />
        <DialogueItem 
            onPress={() => props.chooseCar("truck")}
            option="Truck" />            
    </View>
)

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 200,
        borderRadius: 20,
        padding: 20,
        justifyContent: "space-evenly",
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#ccc"
    },
    closeButton: {
        position: "absolute",
        top: 10,
        right: 10
    }
})

export default carDialogue;