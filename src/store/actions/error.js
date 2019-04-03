import * as actionTypes from './actionTypes';

export const clearError = () => {
    return dispatch => {
        dispatch(setError(""))
    }
}

export const setError = (error) => {
    return {
        type: actionTypes.SET_ERROR,
        errorMessage: error
    }
}

export const setSuccess = (message) => {
    return {
        type: actionTypes.SET_SUCCESS,
        successMessage: message
    }
}

export const clearSuccess = () => {
    return dispatch => {
        dispatch(setSuccess(""))
    }
}