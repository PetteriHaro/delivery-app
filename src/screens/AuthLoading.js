import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ActivityIndicator,
    AsyncStorage
} from 'react-native';

class AuthLoading extends Component {
    
     componentDidMount() {
        AsyncStorage.getAllKeys()
        .then(keys => {
            return AsyncStorage.multiGet(keys)      
        })
        .then(result => {
            if (result.length === 0) {
                return this.props.navigation.navigate("Auth")
            } 
            let shit = result.map((res, i, store) => {
                let key = store[i][0];
                let value = store[i][1]
                return {key, value}
            })
            let mapped = shit.map(item => ({[item.key]: item.value}));
            let newObj = Object.assign({}, ...mapped)
            // 
            fetch("http://localhost:5000/auth/auto-login", {
                method: "POST",
                body: JSON.stringify({
                    email: newObj.email,
                    token: newObj.token,
                    userId: newObj.userId
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(res => {
                if (res.status === 401 || res.status === 402) {
                    AsyncStorage.multiRemove(["token", "email", "userId"])
                    this.props.navigation.navigate("Auth")
                    throw new Error("Auto Login Failed in Front End")
                }
                return res.json()
            })
            .then(parsedRes => {
                if (!parsedRes) {
                    AsyncStorage.multiRemove(["token", "email", "userId"], (err) => {
                        return this.props.navigation.navigate("Auth")
                    })
                } else {
                    return this.props.navigation.navigate("Home", {user: parsedRes})
                }   
            })
            .catch(err => console.log(err)) // Catches status errors
        })
        .catch(err => console.log(err))
     }
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#D55C5E" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: "center",
        justifyContent: "center"
    },
})

export default AuthLoading;