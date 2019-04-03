import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import CustomInput from '../../UI/CustomInput/CustomInput';
import CustomButton from '../../UI/CustomButton/CustomButton';
import CardPicker  from './CardPicker/CardPicker';

const signupForm = (props) => {
    let message;
    let button = (
        <CustomButton onPress={props.signupHandler}>
            SIGNUP    
        </CustomButton> 
    )
    if (props.isLoading) {
        button = <ActivityIndicator size="large" color="#D55C5E" /> 
    }
    if (props.errorMessage !== "") {
        message = <Text style={{color: "red"}}>{props.errorMessage}</Text>
    }
    if (props.successMessage !== "") {
        message = <Text style={{color: "green"}}>{props.successMessage}</Text>
    }
    return (
        <View style={styles.container}>
            <CustomInput 
                iconName="user"
                placeholder="Name"
                autoCorrect={false}
                textContentType="name"
                onChangeText={(val) => props.changeTextHandler(val, "name")}
                value={props.controls.name.value} />
            <CustomInput 
                iconName="mail"
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                textContentType="emailAddress"
                onChangeText={(val) => props.changeTextHandler(val, "email")}
                value={props.controls.email.value} />
            <CustomInput 
                iconName="lock"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                textContentType="password"
                onChangeText={(val) => props.changeTextHandler(val, "password")}
                value={props.controls.password.value} />
            <CustomInput 
                iconName="lock"
                placeholder="Confirm Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                textContentType="password"
                onChangeText={(val) => props.changeTextHandler(val, "confirmPassword")}
                value={props.controls.confirmPassword.value} />
            <CardPicker 
                iconName="credit-card"
                value={props.controls.creditCard.number.value}
                type={props.controls.creditCard.type.value}
                enterCardInfo={props.enterCardInfo} />
            {button}
            {message}
            <TouchableOpacity onPress={props.toSigninScreen} style={{alignItems: "center"}}>
                <Text style={styles.text}>Already have an account?</Text>
                <Text style={[styles.text, {textDecorationLine: "underline"}]}>Login here</Text>
            </TouchableOpacity>
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor:"#ccc",
        width: "90%",
        padding: 8,
        alignItems: "center",
        marginVertical: 20,
        borderRadius: 5,
        backgroundColor: "white"
    },
    text: {
        color: "#333333",
        fontSize: 16,
        padding: 3
    },
    cardInput: {
        width: "100%"
    }
})

export default signupForm;