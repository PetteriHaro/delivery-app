import React, { Component } from 'react';
import {
    View,
    StyleSheet, 
    ScrollView,
    Text
} from 'react-native';
import DrawerIcon from '../components/DrawerIcon/DrawerIcon';
import Header from '../components/UI/Header/Header';
import TopImage from '../components/JoinDriver/TopImage/TopImage';
import Form from '../components/JoinDriver/Form/Form';

class JoinDriver extends Component {
    state = {
        controls: {
            name: {
                value: ""
            },
            email: {
                value: ""
            },
            phone: {
                value: ""
            },
            city: {
                value: ""
            },
            carType: {
                value: ""
            }
        },
        applicationSent: false
    }
    drawerHandler = () => {
        this.props.navigation.openDrawer();
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

    checkBoxPressHandler = (val) => {
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    carType: {
                        ...prevState.controls.carType,
                        value: val
                    }
                }
            }
        })
    }

    formSubmitHandler = () => {
        const controls = this.state.controls
        let driver = {
            name: controls.name.value,
            email: controls.email.value,
            phone: controls.phone.value,
            city: controls.city.value,
            carType: controls.carType.value
        }
        fetch("http://localhost:5000/driver", {
            method: "POST",
            body: JSON.stringify(driver),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(parsedRes => {
            console.log(parsedRes)
            this.setState({
                applicationSent: true
            })
        })
        .catch(err => console.log(err))
    }

    render() {
        let content = (
            <ScrollView contentContainerStyle={{alignItems: "center"}} bounces={false}>
                <Form 
                    controls={this.state.controls}
                    changeText={this.changeTextHandler}
                    onCheckBoxPress={this.checkBoxPressHandler}
                    formSubmit={this.formSubmitHandler}/>
            </ScrollView>
        )
        if (this.state.applicationSent) {
            content = (
                <View style={styles.thankyouContainer}>
                    <Text style={styles.thankyouText}>Thank You for joining! You will receive a confirmation email shortly</Text>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <DrawerIcon drawerHandler={this.drawerHandler} />
                <TopImage />
                <Header>Driver Program</Header>

                {content}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        zIndex: 1
    },
    thankyouContainer: {
        marginTop: 40,
        alignItems: "center"
    },
    thankyouText: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#3FBF4A",
        textAlign: "center"
    }
})

export default JoinDriver;