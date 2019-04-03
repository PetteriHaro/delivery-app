import * as actionTypes from './actionTypes';
import * as actions from './index'
import NavigationService from '../../utils/NavigationService'

import stripe from 'tipsi-stripe'

export const signup = (userData) => {
    return dispatch => {
        const tokenParams = userData.tokenParams
        dispatch(actions.uiStartLoading())
        stripe.createTokenWithCard(tokenParams)
        .then(token => { 
            const user = {
                    ...userData.user,
                    tokenObject: token
            }
            fetch("http:localhost:5000/auth/signup", {
                method: "POST",
                body: JSON.stringify({user}),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(res => res.json())
            .then(user => {
                dispatch(actions.setSuccess("Signup Successful!"))
                dispatch(actions.uiStopLoading())
                console.log(user)
                setTimeout(() => {
                    dispatch(actions.clearSuccess())
                    dispatch(actions.clearError())
                    NavigationService.navigate("Login")
                }, 2000)
            })
        })
        .catch(err => {
            dispatch(actions.setError("Something wenet wrong!"))
            dispatch(actions.uiStopLoading())
        })   
    }
}

export const setUser = (user) => {
    return {
        type: actionTypes.SET_USER,
        user: user
    }
}

