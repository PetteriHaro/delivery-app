import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <View style={styles.container}>
        <NavigationItem
            onItemPress={() => props.navigate("Home")}
            text="Home"
            active={props.currentRoute === "Home" ? true : false} />
        <NavigationItem
            onItemPress={() => props.navigate("Profile")}
            text="Profile"
            active={props.currentRoute === "Profile" ? true : false} />
        <NavigationItem
            onItemPress={() => props.navigate("Settings")}
            text="Settings"
            active={props.currentRoute === "Settings" ? true : false} />   
        <NavigationItem
            onItemPress={() => props.navigate("Logout")}
            text="Logout"
            active={props.currentRoute === "Logout" ? true : false} />           
    </View>
)

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "flex-start"
    },
})

export default navigationItems;