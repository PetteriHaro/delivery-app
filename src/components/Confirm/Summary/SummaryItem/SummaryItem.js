import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const summaryItem = (props) => (
    <View 
        style={[
            styles.container,
            {
                borderBottomWidth: props.description === "" ? 0 : 1,
                padding: props.description === "" ? 0 : 8,
            }
        ]}>
        <Text style={[styles.text, {fontWeight: "bold"}]}>{props.description}</Text>
        <Text style={[styles.text, {padding: 5}]}>{props.option}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        borderColor: "#D8D8D8",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 8
    },
    text: {
        fontSize: 14,
    }
})

export default summaryItem;