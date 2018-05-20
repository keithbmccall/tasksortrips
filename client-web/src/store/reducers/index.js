import {combineReducers} from 'redux'
import eventsReducer from './eventsReducer'
import authReducer from './authReducer'
import windowReducer from './windowReducer'









export default combineReducers({events: eventsReducer, auth: authReducer, window: windowReducer})