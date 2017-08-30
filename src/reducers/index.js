import { combineReducers } from 'redux';
import news from './news'
import auth from './auth'

export default combineReducers({
    news,
    auth
});