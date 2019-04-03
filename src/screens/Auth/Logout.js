import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage
} from 'react-native';

class Logout extends Component {
    componentDidMount() {
        AsyncStorage.multiRemove(["token", "email", "userId"])
        .then(result => {
            this.props.navigation.navigate("Auth")
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text></Text>
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

export default Logout;