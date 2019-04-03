import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import BackIcon from '../components/BackIcon/BackIcon';
import Header from '../components/UI/Header/Header';
import DriverList from '../components/List/DriverList/DriverList';
import OrderOptions from '../components/List/OrderOptions/OrderOptions';

class List extends Component {
    backHandler = () => {
        this.props.navigation.goBack()
    }

    toDetailScreen = (driverId) => {
        let PARAMS = this.props.navigation.state.params
        let driver = PARAMS.drivers.find(d => {
            return driverId === d._id
        })
        this.props.navigation.navigate("Confirm", {driver: driver, item: PARAMS.item, user: PARAMS.user})
    }

    render() {
        let PARAMS = this.props.navigation.state.params
        return (
            <View style={styles.container}>
                <BackIcon backHandler={this.backHandler} />
                <Header>Choose Driver</Header>
                <OrderOptions item={PARAMS.item} />
                <DriverList 
                    data={PARAMS.drivers}
                    onItemPress={this.toDetailScreen} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        alignItems: "center"
    },
})

export default List;