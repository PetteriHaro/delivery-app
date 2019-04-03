import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import SmallHeader from '../../../UI/SmallHeader/SmallHeader';

const navigationItem = (props) => (
    <TouchableOpacity style={styles.container} onPress={props.onItemPress}>
        <Text style={[
            styles.text,
            {
                fontWeight: props.active ? "bold" : null,
                color: props.active ? "#D55C5E" : "#565656"
            }
        ]}>{props.text}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        marginVertical: 15,
        width: "100%"
    },
    text: {
        fontSize: 18,
        textAlign: "left",
    },
})

export default navigationItem;