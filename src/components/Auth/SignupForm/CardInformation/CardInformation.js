import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import { CreditCardInput } from "react-native-credit-card-input";
import CardFront from '../../../../assets/card.png';
import CardBack from '../../../../assets/cardBack.png'

const cardInformation = (props) => (
    <View style={styles.container} >
        <CreditCardInput 
            onChange={props.onCreditChangeHandler} 
            style={styles.container}
            labels={{
                number: "Card Number",
                expiry: "Expiry",
                cvc: "CVC"
            }}
            cardScale={0.8}
            cardImageFront={CardFront}
            cardImageBack={CardBack} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        width: "90%",
        marginTop: 20,
        borderRadius: 5,
        padding: 8
    },
})

export default cardInformation;