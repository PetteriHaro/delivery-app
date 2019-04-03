import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import DatePickerItem from './DatePickerItem/DatePickerItem'
import NowPicker from './NowPicker/NowPicker';
import SmallHeader from '../../../UI/SmallHeader/SmallHeader';

const datePicker = (props) => {
    let time;
    if (!props.controls.now) {
        time = (
            <View style={styles.inputContainer}>
                <DatePickerItem 
                    date={props.controls.when.date}
                    dateChangedHandler={props.dateChangedHandler}
                    mode="date"
                    placeholder="Date"
                    iconName="calendar" />
                <DatePickerItem 
                    date={props.controls.when.time}
                    dateChangedHandler={props.dateChangedHandler}
                    mode="time"
                    placeholder="Time"
                    iconName="clock" />    
            </View>
        )
    }
    return (
        <View style={{width: "100%", marginBottom: 10}}>
            <SmallHeader>When?</SmallHeader>
            <NowPicker 
                controls={props.controls}
                checkBoxPress={props.checkBoxPress} />
            {time}
        </View>
        
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        width: "95%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center"
    },
})

export default datePicker;