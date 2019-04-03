import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

import TopImage from '../components/Sidedrawer/TopImage/TopImage';
import NavigationItems from '../components/Sidedrawer/NavigationItems/NavigationItems';

class SideDrawer extends Component {


    navigationHandler = (screen) => {
        this.props.navigation.navigate(screen)
    }

    render() {
        let CURRENT_ROUTE = this.props.navigation.state.routes[this.props.navigation.state.index].routeName
        return (
            <View style={styles.container}>
                <TopImage />
                <NavigationItems 
                    navigate={this.navigationHandler}
                    currentRoute={CURRENT_ROUTE} />

                <TouchableOpacity style={styles.joinContainer} onPress={() => this.navigationHandler("JoinDriver")}>
                    <Text style={styles.text}>Become a driver?</Text>
                </TouchableOpacity>      
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    joinContainer: {
        position: "absolute",
        bottom: 50,
        left: 12
    },
     text: {
         color: "#565656",
         textDecorationLine: 'underline',
     }
})

export default SideDrawer;