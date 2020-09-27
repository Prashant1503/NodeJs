import {combineReducers} from 'redux';
import userReducer from './users';
import counterReducer from './counter';

const allReducer = combineReducers({
     userReducer,
    counterReducer
});

export default allReducer;