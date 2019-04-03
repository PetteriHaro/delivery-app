import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import CheckBoxItem from './CheckBoxItem/CheckBoxItem';
import SmallHeader from '../../../UI/SmallHeader/SmallHeader';

const checkBoxes = (props) => (
    <View style={styles.checkboxContainer}>
        <SmallHeader>Additional Services:</SmallHeader>

        <View style={styles.checks}>
            <CheckBoxItem 
                title="Moving Equipment"
                checked={props.controls.equipmentRequired}
                onPress={() => props.onCheckboxPress("equipmentRequired")} />
            <CheckBoxItem 
                title="Carrying Assistance"
                checked={props.controls.carryingAssistanceRequired}
                onPress={() => props.onCheckboxPress("carryingAssistanceRequired")} />
            <CheckBoxItem 
                title="Faster Delivery"
                checked={props.controls.expressRequired}
                onPress={() => props.onCheckboxPress("expressRequired")} />
            <CheckBoxItem 
                title="Waste Delivery"
                checked={props.controls.landfillRequired}
                onPress={() => props.onCheckboxPress("landfillRequired")} />      
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