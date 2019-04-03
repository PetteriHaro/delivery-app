import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class Legal extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Legal Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    },
})

export default Legal;