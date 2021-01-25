/** @Reducer
 * -> It is a reducer file.
 * -> Contains multiple reducer
 */

import {combineReducers} from 'redux';
import {loginReducer} from './auth/AuthReducer';
import adminReducer from './admin/AdminReducer';

/** root reducer */
 const rootReducer = combineReducers({
     login : loginReducer,
     admin : adminReducer,
 });

 export default rootReducer;
