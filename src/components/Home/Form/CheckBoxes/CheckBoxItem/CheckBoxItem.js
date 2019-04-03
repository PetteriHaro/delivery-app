import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import {CheckBox} from 'react-native-elements'

const checkBoxItem = (props) => (
    <View style={styles.container}>
        <CheckBox 
            checked={props.checked}
            onPress={props.onPress}
            center
            size={20}
            iconType="feather"
            checkedIcon="check-square"
            uncheckedIcon="square"
            checkedColor="#D55C5E" />
        <Text style={styles.subtitle}>{props.title}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        width: "25%",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "flex-start"
    },
    subtitle: {
        fontSize: 12,
        color: "#565656",
        textAlign: "center"
    },
})

export default checkBoxItem;