import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Animated,
} from 'react-native';
import {connect} from 'react-redux'

import SignupForm from '../../components/Auth/SignupForm/SignupForm';
import TopImage from '../../components/Auth/TopImage/TopImage';
import Header from '../../components/UI/Header/Header';
import Delivery from '../../assets/delivery.jpg';
import CardInformation from '../../components/Auth/SignupForm/CardInformation/CardInformation';
import * as actions from '../../store/actions/index';


class Signup extends Component {
    state = {
        controls: {
            name: {
                value: ""
            },
            email: {
                value: ""
            },
            password: {
                value: ""
            },
            confirmPassword: {
                value: ""
            },
            creditCard: {
                number: {
                    value: ""
                },
                expiry: {
                    value: ""
                },
                cvc: {
                    value: ""
                },
                type: {
                    value: "valid"
                }
            }
        },
        zIndex: new Animated.Value(-1),
    }

    componentWillMount() {
        this.animatedValue = new Animated.Value(0)
        this.value = 0;
        this.animatedValue.addListener(({value}) => {
            this.value = value
        })
        this.frontInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ["0deg", "180deg"]
        })
        this.backInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ["180deg", "360deg"]
        })
    }

    startFlip = () => {
        if (this.value >= 90) {
            Animated.timing(this.state.zIndex, {
                toValue: -1,
                duration: 1
            }).start()
            Animated.timing(this.animatedValue, {
                toValue: 0,
                duration: 400
            }).start()
        } else {
            Animated.timing(this.state.zIndex, {
                toValue: 2,
                duration: 1
            }).start()
            Animated.timing(this.animatedValue, {
                toValue: 180,
                duration: 400
            }).start()
        }
        
    }

    toSigninScreen = () => {
        this.props.navigation.goBack()
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

    creditChangeHandler = (e) => {
        if (e.valid) {
            this.setState(prevState => {
                return {
                    controls: {
                        ...prevState.controls,
                        creditCard: {
                            number: {
                                value: e.values.number
                            },
                            expiry: {
                                value: e.values.expiry
                            },
                            cvc: {
                                value: e.values.cvc
                            },
                            type: {
                                value: e.values.type
                            }
                        }
                    }
                }
            }, () => this.startFlip())
        }
    }

    signupHandler = () => {
        const controls = this.state.controls
        const user = {
            name: controls.name.value,
            email: controls.email.value,
            password: controls.password.value,
        }
        const tokenParams = {
            number: controls.creditCard.number.value.replace(/ /g,""),
            expMonth: +controls.creditCard.expiry.value.split("/")[0],
            expYear: +controls.creditCard.expiry.value.split("/")[1],
            cvc: controls.creditCard.cvc.value
        }
        let userData = {
            user: user,
            tokenParams: tokenParams
        }

        this.props.onSignup(userData)  
    }
    
    render() {
        const frontCardStyle = {
            zIndex: 1,
            transform: [
                {rotateY: this.frontInterpolate}
            ]
        }
        const backcardStyle = {
            zIndex: this.state.zIndex,
            transform: [
                {rotateY: this.backInterpolate}
            ]
        }

        return (
            <View style={styles.container}>
                <TopImage 
                    src={Delivery}
                    height="18%"/>
                <Header>Signup</Header>
                <View style={styles.cardContainer}>
                    <Animated.View style={[styles.card, frontCardStyle]}>
                        <SignupForm 
                            toSigninScreen={this.toSigninScreen}
                            signupHandler={this.signupHandler}
                            enterCardInfo={this.startFlip}
                            changeTextHandler={this.changeTextHandler}
                            controls={this.state.controls}
                            isLoading={this.props.isLoading}
                            successMessage={this.props.successMessage}
                            errorMessagee={this.props.errorMessage} /> 
                    </Animated.View>
                    <Animated.View style={[styles.card, backcardStyle]}>
                        <CardInformation   
                            startFlip={this.startFlip}
                            onCreditChangeHandler={this.creditChangeHandler} />
                    </Animated.View>
                   
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    cardContainer: {
        width: "100%",
        alignItems: "center",
    },
    card: {
        width: "100%",
        position: "absolute",
        top: "0%",
        backfaceVisibility: "hidden",
        left: "5%"
    }
})

const mapStateToProps = state => {
    return {
        isLoading: state.ui.isLoading,
        successMessage: state.error.successMessage,
        errorMessage: state.error.errorMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSignup: (user) => dispatch(actions.signup(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);