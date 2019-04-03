import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import CustomInput from '../../UI/CustomInput/CustomInput';
import CustomButton from '../../UI/CustomButton/CustomButton';
import CheckBoxes from './CheckBoxes/CheckBoxes';
import DatePicker from './DatePicker/DatePicker';
import Smallheader from '../../UI/SmallHeader/SmallHeader';
import CarPicker from './CarPicker/CarPicker'

const form = (props) => (
    <View style={styles.container}>
        <Smallheader>Where and How?</Smallheader>
        <View style={styles.innerContainer}>
            <CustomInput 
                onChangeText={(event) => props.changeTextHandler(event, "from")}
                placeholder="From"
                iconName="map-pin"
                value={props.controls.from.value} />
            <CustomInput 
                onChangeText={(event) => props.changeTextHandler(event, "to")}
                placeholder="To"
                iconName="map"
                value={props.controls.to.value} />
            <CarPicker 
                controls={props.controls}
                showCarDialogue={props.showCarDialogue}
                iconName="truck" />
            <DatePicker 
                controls={props.controls}
                dateChangedHandler={props.dateChangedHandler}
                checkBoxPress={props.onCheckboxPress} />
            <CheckBoxes 
                controls={props.controls}
                onCheckboxPress={props.onCheckboxPress} />
            <CustomButton onPress={props.onSubmit}>
                SEARCH MOVERS
            </CustomButton>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        width: "86%",
        position: "absolute",
        top: 250,
        left: "7%",
        zIndex: 10
    },
    innerContainer: {
        width: "100%",
        alignItems: "center"
    }
})

export default form;