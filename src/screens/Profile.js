import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import DrawerIcon from '../components/DrawerIcon/DrawerIcon';

class Profile extends Component {
    drawerHandler = () => {
        this.props.navigation.openDrawer();
    }
    render() {
        return (
            <View style={styles.container}>
                <DrawerIcon drawerHandler={this.drawerHandler} />
                <Text>Profile</Text>
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

export default Profile;