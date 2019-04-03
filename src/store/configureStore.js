import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';

import uiReducer from './reducers/ui';
import authReducer from './reducers/auth';
import errorReducer from './reducers/error'

const rootReducer = combineReducers({
    ui: uiReducer,
    auth: authReducer,
    error: errorReducer
})

let composeEnhancers = compose

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(Thunk)))
}


export default configureStore;