import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import DatePicker from 'react-native-datepicker';

const datePickerItem = (props) => {
    return (
        <View style={styles.innerDateContainer}>
            <Icon name={props.iconName} size={20} color="#D55C5E" />
            <DatePicker 
                style={styles.input}
                date={props.date}
                mode={props.mode}
                onDateChange={(date) => props.dateChangedHandler(date, props.mode)}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                showIcon={false}
                is24Hour={true}
                placeholder={props.placeholder}
                customStyles={{
                    placeholderText: {
                        color: "#9B9B9B" 
                    },
                    dateInput: {
                        borderTopWidth: 0,
                        borderLeftWidth: 0,
                        borderRightWidth: 0,
                        borderBottomWidth: 1,
                        paddingLeft: 5,
                        borderBottomColor: "#D8D8D8",
                        alignItems: "flex-start",
                    }
                }} />
    </View>
    )
}

const styles = StyleSheet.create({
    innerDateContainer: {
        width: "40%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    input: {
        width: "78%",
    },
})

export default datePickerItem;