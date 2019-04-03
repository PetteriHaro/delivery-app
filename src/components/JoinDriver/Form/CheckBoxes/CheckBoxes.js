import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import CheckBoxItem from "../../../Home/Form/CheckBoxes/CheckBoxItem/CheckBoxItem";
import SmallHeader from '../../../UI/SmallHeader/SmallHeader';

const checkBoxes = (props) => (
    <View style={styles.checkboxContainer}>
        <SmallHeader>Your Moving Vehicle:</SmallHeader>

        <View style={styles.checks}>
            <CheckBoxItem 
                title="Passenger Car"
                checked={props.carType === "passengerCar" ? true : false}
                onPress={() => props.onCheckboxPress("passengerCar")} />
            <CheckBoxItem 
                title="Small Van"
                checked={props.carType === "smallVan" ? true : false}
                onPress={() => props.onCheckboxPress("smallVan")} />
            <CheckBoxItem 
                title="Large Van"
                checked={props.carType === "largeVan" ? true : false}
                onPress={() => props.onCheckboxPress("largeVan")} />
            <CheckBoxItem 
                title="Truck"
                checked={props.carType === "truck" ? true : false}
                onPress={() => props.onCheckboxPress("truck")} />      
        </View> 
    </View>  
)

const styles = StyleSheet.create({
    checkboxContainer: {
        width: "100%",
        textAlign: "left",
        marginBottom: 20
    },
    checks: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
    }
})

export default checkBoxes;