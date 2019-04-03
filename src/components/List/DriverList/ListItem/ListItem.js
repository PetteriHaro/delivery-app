import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import InfoItem from './InfoItem/InfoItem';
import BreadText from '../../../UI/BreadText/BeadText';

const listItem = (props) => (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
        <View style={styles.leftContainer}>
            <InfoItem iconName="user">  {props.driver.name}</InfoItem>
            <InfoItem iconName="mail">  {props.driver.email}</InfoItem>
            <InfoItem iconName="phone">  {props.driver.phone}</InfoItem>
            <InfoItem iconName="map-pin">  {props.driver.city}</InfoItem>
        </View>
        <View style={styles.rightContainer}>
            <BreadText>Valitse</BreadText>
            <Icon name="chevron-right" size={30} color="#D55C5E" />
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        width: "100%", 
        padding: 10,
        borderBottomWidth: 1,
        borderColor: "#ccc",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    rightContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "40%",
        justifyContent: "flex-end"
    },
    leftContainer: {
        width: "60%"
    }
})

export default listItem;