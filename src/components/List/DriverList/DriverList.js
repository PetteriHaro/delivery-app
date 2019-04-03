import React from 'react';
import {
    StyleSheet,
    FlatList
} from 'react-native';
import ListItem from './ListItem/ListItem'

const list = (props) => (
    <FlatList 
        style={styles.container}
        data={props.data}
        keyExtractor={(item, index) => item._id}
        renderItem={(info) => (
             <ListItem 
                driver={info.item}
                onPress={() => props.onItemPress(info.item._id)} />
        )} 
    />
)

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
})

export default list;