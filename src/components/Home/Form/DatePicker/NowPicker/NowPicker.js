import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import {CheckBox} from 'react-native-elements';


const nowPicker = (props) => (
    <View style={styles.nowPicker}>
        <CheckBox 
            checked={props.controls.now}
            onPress={() => props.checkBoxPress("now")}
            size={20}
            containerStyle={{backgroundColor: "transparent", borderWidth: 0, padding: 0, margin: 0}}
            iconType="feather"
            checkedIcon="check-circle"
            uncheckedIcon="circle"
            checkedColor="#D55C5E" />
        <Text style={styles.subtitle}>Now</Text>    
    </View>
)

const styles = StyleSheet.create({
    nowPicker: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10
    },
    subtitle: {
        fontSize: 14,
        color: "#565656",
        textAlign: "center",
    },
})

export default nowPicker;