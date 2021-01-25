import {createStore,applyMiddleware,compose} from 'redux';
import  rootReducer  from '../reducers/index.js';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

/** Import action creators */
import { loginUser,logOutUser,registerUser } from '../actions/auth/auth';
import initialState from '../state';
import { getAllLeave, getEmployeeList } from '../actions/admin/AdminAction.js';



/** Create and export store */
let store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
);


store.subscribe(() => {
    console.log(store.getState());
});

/** Dispatching user's actions */

store.dispatch(loginUser());
store.dispatch(registerUser());
store.dispatch(getAllLeave());
store.dispatch(logOutUser());
store.dispatch(getEmployeeList());

export default store;