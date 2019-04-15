import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ActivityIndicator,
    AsyncStorage
} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../store/actions/index';

class AuthLoading extends Component {
    
    componentDidMount() {
      this.props.onAutoLogin()
    }
    
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#D55C5E" />
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

const mapDispatchToProps = dispatch => {
    return {
        onAutoLogin: () => dispatch(actions.autoLogin())
    }
}

export default connect(null, mapDispatchToProps)(AuthLoading);