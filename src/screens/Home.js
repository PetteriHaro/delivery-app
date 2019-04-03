import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Animated,
    Dimensions,
} from 'react-native';

import DrawerIcon from '../components/DrawerIcon/DrawerIcon';
import CornerShape from '../components/Home/CornerShape/CornerShape';
import Form from '../components/Home/Form/Form';
import Header from '../components/Home/Header/Header';
import CarDialogue from '../components/Home/CarDialogue/CarDialogue';
import UserName from '../components/Home/Name/Name';

const {width, height} = Dimensions.get("window")

class Home extends Component {
    state = {

    }

    componentWillMount() {
        this.reset()
        this.didFocusSubscription()
    }

    reset = () => {
        const params = (this.props.navigation.state.params)
        this.setState({
            controls: {
                from: {
                    value: ""
                },
                to: {
                    value: ""
                },
                carType: {
                    value: "Desired Car Type"
                },
                equipmentRequired: false,
                carryingAssistanceRequired: false,
                expressRequired: false,
                landfillRequired: false,
                when: {
                    date: "",
                    time: "",
                },
                now: true
            },
            anim: new Animated.Value(0),
            zIndex: new Animated.Value(-10),
            user: params.user
        })
    }

    didFocusSubscription = () => {
        this.props.navigation.addListener(
            "didFocus",
            payload => {
                this.reset()
            }
        )
    }

    toDetailScreenHandler = () => {
        this.props.navigation.navigate("Details", {name: "Keijo"})
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

    checkBoxPressedHandler = (key) => {
        let currentState = this.state.controls[key]
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    [key]: !currentState
                }
            }
        })
    }

    dateChangedHandler = (dateOrTime, key) => {
            this.setState(prevState => {
                return {
                    controls: {
                        ...prevState.controls,
                        when: {
                            ...prevState.controls.when,
                            [key]: dateOrTime
                        }
                    }
                }
            })
    }

    showCarDialogue = () => {
        Animated.timing(
            this.state.zIndex, {
                toValue: 40,
                duration: 100
            }
        ).start()
        Animated.timing(
            this.state.anim,{
                toValue: 1,
                duration: 500,
            }
        ).start()
    }

    closeCarDialogue = () => {
        Animated.timing(
            this.state.anim,{
                toValue: 0,
                duration: 500
            }
        ).start()
        Animated.timing(
            this.state.zIndex, {
                toValue: -1,
                duration: 100
            }
        ).start()
    }

    chooseCar = (val) => {
        this.closeCarDialogue()
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    carType: {
                        value: val
                    }
                }
            }
        })
    }

    searchDrivers = () => {
        const controls = this.state.controls
        let when = {
            date: controls.when.date,
            time: controls.when.time
        }
        if (controls.now) {
            when = "Now"
        }
        let additionalServices = [];
        controls.equipmentRequired ? additionalServices.push("equipmentRequired") : null
        controls.carryingAssistanceRequired ? additionalServices.push("carryingAssistanceRequired") : null
        controls.expressRequired ? additionalServices.push("expressRequired") : null
        controls.landfillRequired ? additionalServices.push("landfillRequired") : null 
        let searchItem = {
            from: controls.from.value,
            to: controls.to.value,
            when,
            carType: controls.carType.value,
            additionalServices
        }
        fetch("http://localhost:5000/drivers?carType=" + controls.carType.value)
        .then(res => res.json())
        .then(drivers => {
            this.props.navigation.navigate("List", {item: searchItem, drivers: drivers, user: this.state.user})
        })
        .catch(err => {
            alert("Couldnt find free drivers")
            console.log(err)
        })
    }    

    render() {
        return (
            <View style={{flex: 1}}>
                <DrawerIcon drawerHandler={this.drawerHandler} />
                <CornerShape />
                <UserName user={this.state.user} />
                <Header />
                <View style={styles.container}>
                    <Form 
                        changeTextHandler={(val, key) => this.changeTextHandler(val, key)}
                        controls={this.state.controls}
                        onSubmit={this.searchDrivers}
                        onCheckboxPress={this.checkBoxPressedHandler}
                        dateChangedHandler={(d, key) => this.dateChangedHandler(d, key)}
                        showCarDialogue={this.showCarDialogue} />
                </View>
                <Animated.View style={{
                    width: width,
                    height: height,
                    backgroundColor: "rgba(0,0,0,0.6)",
                    position: "absolute",
                    zIndex: this.state.zIndex,
                    opacity: this.state.anim,
                    
                }}/>
                <Animated.View style={{
                    position: "absolute",
                    top: 300,
                    width: "84%",
                    left: "8%",
                    shadowColor: "black",
                    shadowOffset: {
                        width: 2,
                        height: 2
                    },
                    shadowOpacity: 0.4,
                    shadowRadius: 5,
                    zIndex: 50,
                    opacity: this.state.anim,
                    transform: [
                        {
                            scale: this.state.anim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0.01, 1]
                            }),
                        },
                    ]
                }}>
                    <CarDialogue 
                        closeDialogue={this.closeCarDialogue}
                        chooseCar={this.chooseCar} />
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    
})

export default Home;