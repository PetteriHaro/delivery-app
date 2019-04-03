import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import CustomInput from '../../UI/CustomInput/CustomInput';
import CustomButton from '../../UI/CustomButton/CustomButton';
import CheckBoxes from './CheckBoxes/CheckBoxes';

const form = (props) => (
    <View style={styles.container}>
        <CustomInput 
            iconName="user"
            placeholder="Name"
            onChangeText={(val) => props.changeText(val, "name")}
            value={props.controls.name.value}
            autoCorrect={false} />
        <CustomInput 
            iconName="mail"
            placeholder="Email"
            onChangeText={(val) => props.changeText(val, "email")}
            value={props.controls.email.value}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address" />   
        <CustomInput 
            iconName="phone"
            placeholder="Phone"
            onChangeText={(val) => props.changeText(val, "phone")}
            value={props.controls.phone.value}
            autoCorrect={false}
            keyboardType="number-pad"  />
        <CustomInput 
            iconName="map-pin"
            placeholder="City"
            onChangeText={(val) => props.changeText(val, "city")}
            value={props.controls.city.value} />
        <CheckBoxes 
            onCheckboxPress={props.onCheckBoxPress}
            carType={props.controls.carType.value} />
        <CustomButton onPress={props.formSubmit}>
            JOIN PROGRAM    
        </CustomButton>              
    </View>
)

const styles = StyleSheet.create({
    container: {
        width: "85%",
        alignItems: "center"
    },
})

export default form;