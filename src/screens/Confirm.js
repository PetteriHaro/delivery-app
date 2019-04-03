import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ActivityIndicator
} from 'react-native';

import BackIcon from '../components/BackIcon/BackIcon';
import CornerShape from '../components/Confirm/CornerShape/CornerShape';
import Summary from '../components/Confirm/Summary/Summary';
import Header from '../components/UI/Header/Header';
import CustomButton from '../components/UI/CustomButton/CustomButton';

class Confirm extends Component {
    state = {
        sliderValue: 0,
        orderSent: false,
        isLoading: false
    }

    componentWillMount() {
        this.setState({
            orderSent: false
        })
    }

    backHandler = () => {
        this.props.navigation.goBack()
    }

    sendOrderHandler = () => {
        this.setState({isLoading: true})
        let PARAMS = this.props.navigation.state.params;
        let order = {
            ...PARAMS.item,
            driver: PARAMS.driver,
            price: 72,
            userId: PARAMS.user.userId
        }
        fetch("http://localhost:5000/order", {
            method: "POST",
            body: JSON.stringify({order: order}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(parsedRes => {
            this.setState({
                orderSent: true,
                isLoading: false
            })
            setTimeout(() => {
                this.props.navigation.navigate("Home", {user: parsedRes.user})
            }, 2500)
        })
        .catch(err => {
            this.setState({isLoading: false})
            console.log(err)
        })
        
    }

    render() {
        let button = (
            <CustomButton onPress={this.sendOrderHandler}>
                {"CONFIRM & PAY ORDER"}
            </CustomButton>
        )
        if (this.state.orderSent) {
            button = (
                <View style={styles.thankyouContainer}>
                    <Text style={styles.thankyouText}>Thank You for you order! You will receive a confirmation email shortly.</Text>
                </View>
            )
        }

        if (this.state.isLoading) {
            button = <ActivityIndicator color="#D55C5E" size="large" />
        }

        let PARAMS = this.props.navigation.state.params
        return (
            <View style={{flex: 1}}>
                <BackIcon backHandler={this.backHandler} />
                <CornerShape />
                <View style={styles.container}>
                    <Header>Delivery Summary</Header>
                    <Summary item={PARAMS.item} driver={PARAMS.driver} />
                    {button}
                </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 50
    },
    thankyouContainer: {
        alignItems: "center"
    },
    thankyouText: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#3FBF4A",
        textAlign: "center"
    }
})

export default Confirm;