import * as actionTypes from '../actions/actionTypes';

const initialState = {
    errorMessage: "",
    successMessage: ""
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_ERROR: {
            return {
                ...state,
                errorMessage: action.errorMessage
            }
        }
        case actionTypes.SET_SUCCESS: {
            return {
                ...state,
                successMessage: action.successMessage
            }
        }
        default:
            return state;
    }
}

export default reducer;