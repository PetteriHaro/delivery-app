import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import SummaryItem from './SummaryItem/SummaryItem';
import SmallHeader from'../../UI/SmallHeader/SmallHeader'

const summary = (props) => {
    return (
        <View style={styles.container}>
            <SummaryItem 
                description="From"
                option={props.item.from} />
            <SummaryItem 
                description="To"
                option={props.item.to} />
            <SummaryItem 
                description="Vehicle"
                option={props.item.carType.charAt(0).toUpperCase() + props.item.carType.slice(1)} />
            <SummaryItem 
                description="When?"
                option={props.item.when !== "Now" ? props.item.when.date + ", " + props.item.when.time : props.item.when} />
            <View style={styles.additionalServices}>
                <Text style={styles.text}>Additional Services</Text>
                <View style={{width: "70%"}}>
                    {props.item.additionalServices.map(service => {
                        let name = service.split("R")[0]
                        let newName = name.charAt(0).toUpperCase() + name.slice(1)
                        return <SummaryItem key={service} description="" option={newName} />
                    })}
                </View>
            </View> 
            <SummaryItem 
                description="Driver"
                option={props.driver.name} />
            <SummaryItem 
                description="Payment method"
                option="Visa **** 4242" />    
            <View style={{marginTop: 20}}>
                <SmallHeader>Estimated Total: 62€</SmallHeader>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        marginVertical: 30,
        alignItems: "center"
    },
    additionalServices: {
        flexDirection: "row",
        width: "100%",
        padding: 8,
        justifyContent: "space-between",
        borderColor: "#D8D8D8",
        borderBottomWidth: 1,
    },
    text: {
        fontSize: 14,
        fontWeight: "bold",
        width: "30%"
    }
})

export default summary;