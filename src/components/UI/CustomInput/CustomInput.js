import React from 'react';
import {
    TextInput,
    StyleSheet,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

const customInput = (props) => (
    <View style={styles.inputContainer}>
        <Icon name={props.iconName} size={20} color="#D55C5E" />
        <TextInput 
            {...props} 
            underlineColorAndroid="transparent" 
            style={styles.input} 
            placeholderTextColor="#9B9B9B" 
        />
    </View>
    
)

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        marginBottom: 8,
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

export default customInput;