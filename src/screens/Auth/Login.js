import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text
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
        let userData = {
            email: this.state.controls.email.value,
            password: this.state.controls.password.value
        }
        this.props.onLogin(userData)
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
                <Text>{this.props.errorMessage}</Text>
                <LoginForm 
                    toSignUpScreen={this.toSignUpScreen}
                    loginHandler={this.loginHandler}
                    controls={this.state.controls}
                    onChangeText={this.changeTextHandler}
                    error={this.state.error}
                    isLoading={this.props.isLoading} />
                <Text onPress={this.props.continueWithoutLogin} style={{
                    textDecorationStyle: "solid", 
                    textDecorationColor: "black",
                }}>
                    Continue Without Login
                </Text>    
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
      isLoading: state.ui.isLoading,
      errorMessage: state.error.errorMessage
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      startLoading: () => dispatch(actions.uiStartLoading()),
      stopLoading: () => dispatch(actions.uiStopLoading()),
      onLogin: (userData) => dispatch(actions.login(userData)),
      continueWithoutLogin: () => dispatch(actions.continueWithoutLogin())
    }
  }  

export default connect(mapStateToProps, mapDispatchToProps)(Login);