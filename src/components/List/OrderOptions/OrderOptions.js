import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import SmallHeader from '../../UI/SmallHeader/SmallHeader';
import BreadText from '../../UI/BreadText/BeadText';

const orderOptions = (props) => {
    let time = props.item.when
    if (props.item.when !== "Now") {
        time = props.item.when.time + " | " + props.item.when.date
    }
    
    return (
        <View style={styles.container}>
            <View>
                <SmallHeader>Delivery Details:</SmallHeader>
                <BreadText>From: {props.item.from}</BreadText>
                <BreadText>To: {props.item.to}</BreadText>
                <BreadText>When: {time}</BreadText>
                <BreadText>Vehicle: {props.item.carType.charAt(0).toUpperCase() + props.item.carType.slice(1)}</BreadText>
                <BreadText></BreadText>
            </View>
            <View>
                <SmallHeader>Additional Services: </SmallHeader>
                {props.item.additionalServices.map(service => {
                    name = service.charAt(0).toUpperCase() + service.slice(1)
                    return <BreadText key={service}>{name}</BreadText>
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingTop: 15,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: "#ccc",
        flexDirection: "row",
        justifyContent: "space-between"
    }
})

export default orderOptions;