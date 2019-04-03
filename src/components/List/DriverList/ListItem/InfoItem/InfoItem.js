import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import BreadText from '../../../../UI/BreadText/BeadText';

const infoItem = (props) => (
    <View style={styles.container}>
        <Icon name={props.iconName} size={15} color="#D55C5E" />
        <BreadText>{props.children}</BreadText>
    </View>
)

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        paddingVertical: 3
    },
})

export default infoItem;