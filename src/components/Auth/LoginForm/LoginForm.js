import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import CustomInput from '../../UI/CustomInput/CustomInput';
import CustomButton from '../../UI/CustomButton/CustomButton';

const loginForm = (props) => {
    let button = (
        <CustomButton onPress={props.loginHandler}>
            LOGIN    
        </CustomButton> 
    )
    let error = (
        <Text style={{color: "red"}}>{props.error}</Text>
    )
    if (props.error === "") {
        error = null
    }
    if (props.isLoading) {
        button = (
            <CustomButton onPress={props.loginHandler} notText={true}>
                <ActivityIndicator size="small" color="white" />    
            </CustomButton> 
        )
    }

    return (
        <View style={styles.container}>
            <CustomInput 
                iconName="user"
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                textContentType="emailAddress" 
                onChangeText={(val) => props.onChangeText(val, "email")}
                value={props.controls.email.value} />
            <CustomInput 
                iconName="lock"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                textContentType="password"
                onChangeText={(val) => props.onChangeText(val, "password")}
                value={props.controls.password.value} />
            {error}     
            {button}
            <Text style={styles.text}>Dont have an account yet?</Text>
            <Text 
                style={[styles.text, {textDecorationLine: "underline"}]} 
                onPress={props.toSignUpScreen}>
                Signup here
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "75%",
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 8,
        alignItems: "center",
        marginVertical: 20,
        borderRadius: 5
    },
    text: {
        color: "#333333",
        fontSize: 16,
        margin: 3
    }
})

export default loginForm;