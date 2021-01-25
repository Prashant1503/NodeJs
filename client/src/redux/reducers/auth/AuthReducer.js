/**
 * -> A function accepts state and action.
 * -> state = intialState,action = "Plain Text" i.e (LOGIN_USR) etc.
 * -> update state based on action
 */

 /** Import initial State */
 import  initialState from '../../state.js' ;
 import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_SUCCESS } from '../../constants';

 export const loginReducer = (state =initialState,action) => {

    switch(action.type) {
        
        //    case for login success
        case LOGIN_SUCCESS:
            return {
                ...state,
                user : action.payload,
                errors : null,
                hasLoggedIn :true

            }

            // login failure
            case LOGIN_FAILURE:
                return {
                    ...state,
                    user : null,
                    errors : action.payload
                }

                 // registeration success
            case REGISTER_SUCCESS:
                return {
                    ...state,
                    user : action.payload,
                    errors : null
                }

                 // registeration failure
            case REGISTER_FAILURE:
                return {
                    ...state,
                    user : null,
                    errors : action.payload
                }

                default : return state;
    }


 }