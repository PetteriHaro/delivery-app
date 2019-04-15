import * as actionTypes from './actionTypes';
import * as actions from './index';
import {AsyncStorage} from 'react-native'
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

export const login = (userData) => {
    return dispatch => {
        let email = userData.email;
        let password = userData.password;
        dispatch(actions.uiStartLoading())
        fetch("http://localhost:5000/auth/login", {
            method: "POST",
            body: JSON.stringify({
                email: email, 
                password: password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            if (res.status === 422) {
                return res.json()
                .then(parsedRes => {
                    dispatch(actions.uiStopLoading())
                    return dispatch(actions.setError(parsedRes.data[0].msg))
                })
            }
            if (res.status === 401) {
                return res.json()
                .then(parsedRes => {
                    dispatch(actions.uiStopLoading())
                    return dispatch(actions.setError(parsedRes.message))
                })
            }
            return res.json()
        })
        .then(parsedRes => {
            if (parsedRes) {
                return AsyncStorage.multiSet([
                    ["token", parsedRes.token],
                    ["email", parsedRes.email],
                    ["userId", parsedRes.userId] 
                ])
                .then(result => {
                    let user = {
                        name: parsedRes.name,
                        email: parsedRes.email,
                        userId: parsedRes.userId, 
                        orders: parsedRes.orders   
                    }
                    dispatch(actions.uiStopLoading())
                    dispatch(setUser(user))
                    return NavigationService.navigate("Home")
                })
            }            
        })
        .catch(err => {
            dispatch(actions.setError("Something when wrong"))
            dispatch(actions.uiStopLoading())
        })
    }
}

export const autoLogin = () => {
    return dispatch => {
        AsyncStorage.getAllKeys()
        .then(keys => {
            return AsyncStorage.multiGet(keys)      
        })
        .then(result => {
            if (result.length === 0) {
                return NavigationService.navigate("Auth")
            } 
            let r = result.map((res, i, store) => {
                let key = store[i][0];
                let value = store[i][1]
                return {key, value}
            })
            let mapped = r.map(item => ({[item.key]: item.value}));
            let newObj = Object.assign({}, ...mapped)
            
            fetch("http://localhost:5000/auth/auto-login", {
                method: "POST",
                body: JSON.stringify({
                    email: newObj.email,
                    token: newObj.token,
                    userId: newObj.userId
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(res => {
                if (res.status === 401 || res.status === 402) {
                    AsyncStorage.multiRemove(["token", "email", "userId"])
                    NavigationService.navigate("Auth")
                    throw new Error("Auto Login Failed in Front End")
                }
                return res.json()
            })
            .then(parsedRes => {
                if (!parsedRes) {
                    AsyncStorage.multiRemove(["token", "email", "userId"], (err) => {
                        return NavigationService.navigate("Auth")
                    })
                } else {
                    dispatch(setUser(parsedRes))
                    return NavigationService.navigate("Home")
                }   
            })
            .catch(err => console.log(err)) // Catches status errors
        })
        .catch(err => console.log(err))
    }
}

export const continueWithoutLogin = () => {
    return dispatch => {
        let unSignedUser = {
            name: "",
            email: "",
            userId: "11"
        }
        NavigationService.navigate("Home")
        dispatch(setUser(unSignedUser))
    }
}

export const setUser = (user) => {
    return {
        type: actionTypes.SET_USER,
        user: user
    }
}

