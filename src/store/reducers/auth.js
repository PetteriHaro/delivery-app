import * as actionTypes from '../actions/actionTypes';

const initialState = {
    name: null,
    userId: null,
    orders: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_USER: {
            return {
                ...state,
                name: action.user.name,
                userId: action.user.userId,
                orders: action.user.orders
            }
        }
        default:
            return state
        
    }
}

export default reducer;