import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    AsyncStorage,
} from 'react-native';
import {connect} from 'react-redux'

import LoginForm from '../../components/Auth/LoginForm/LoginForm';
import TopImage from '../../components/Auth/TopImage/TopImage';
import Header from '../../components/UI/Header/Header';
import DelivetyMan from '../../assets/delivery-man.jpg';
import * as actions from '../../store/actions/index';

class Login extends Component {

    state={
        controls: {
            email: {
                value: ""
            },
            password: {
                value: ""
            }
        },
        error: ""
    }

    loginHandler = () => {
        let email = this.state.controls.email.value;
        let password = this.state.controls.password.value;
        this.props.startLoading()
        fetch("http://localhost:5000/auth/login", {
            method: "POST",
            body: JSON.stringify({
                email: email, 
                password: password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            if (res.status === 422) {
                return res.json()
                .then(parsedRes => {
                    this.props.stopLoading()
                    return this.setState({error: parsedRes.data[0].msg})
                })
            }
            if (res.status === 401) {
                return res.json()
                .then(parsedRes => {
                    this.props.stopLoading()
                    console.log(parsedRes)
                    return this.setState({error: parsedRes.message})
                })
            }
            return res.json()
        })
        .then(parsedRes => {
            if (parsedRes) {
                return AsyncStorage.multiSet([
                    ["token", parsedRes.token],
                    ["email", parsedRes.email],
                    ["userId", parsedRes.userId] 
                ])
                .then(result => {
                    let user = {
                        name: parsedRes.name,
                        email: parsedRes.email,
                        userId: parsedRes.userId,                   
                    }
                    this.props.stopLoading()
                    return this.props.navigation.navigate("Home", {user: user})
                })
            }            
        })
        .catch(err => {
            this.setState({
                error: "We are experiencing problems. Try again later.",
                isLoading: false
            })
            console.log(err)
        })
    }

    toSignUpScreen = () => {
        this.props.navigation.navigate("Signup")
    }

    changeTextHandler = (val, key) => {
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    [key]: {
                        ...prevState.controls[key],
                        value: val
                    }
                }
            }
        })
    }
    
    render() {
        return (
            <View style={styles.container}>
                <TopImage src={DelivetyMan} height="30%"/>
                <Header>Login</Header>
                <LoginForm 
                    toSignUpScreen={this.toSignUpScreen}
                    loginHandler={this.loginHandler}
                    controls={this.state.controls}
                    onChangeText={this.changeTextHandler}
                    error={this.state.error}
                    isLoading={this.props.isLoading} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
})

const mapStateToProps = state => {
    return {
      isLoading: state.ui.isLoading
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      startLoading: () => dispatch(actions.uiStartLoading()),
      stopLoading: () => dispatch(actions.uiStopLoading())
    }
  }  

export default connect(mapStateToProps, mapDispatchToProps)(Login);