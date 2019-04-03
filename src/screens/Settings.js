import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';

import DrawerIcon from '../components/DrawerIcon/DrawerIcon';

class Settings extends Component {
    drawerHandler = () => {
        this.props.navigation.openDrawer();
    }
    render() {
        return (
            <View style={styles.container}>
                <DrawerIcon drawerHandler={this.drawerHandler} />
                <Text>Settings Screen</Text>
                <Button title="Go to Legal"
                onPress={() => this.props.navigation.navigate("Legal")} />
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

export default Settings;