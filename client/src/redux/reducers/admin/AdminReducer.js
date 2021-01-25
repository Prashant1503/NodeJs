/**
 * -> A function accepts state and action.
 * -> state = intialState,action = "Plain Text" i.e (ADMIN) etc.
 * -> update state based on action
 */

 /** Import initial State */
 import  initialState from '../../state.js' ;
 import { GET_EMPLOYEE_FAILURE, GET_EMPPLOYEE_SUCCESS, GET_LEAVE_FAILURE, GET_LEAVE_SUCCESS, GET_REQUESTED_LEAVE } from '../../constants';

  const AdminReducer = (state =initialState,action) => {

    switch(action.type) {
        
        //    case for get all leave request
        case GET_REQUESTED_LEAVE :
           return {
              ...state,
              leave : null
           }

        case GET_LEAVE_SUCCESS :
           
           return {
              ...state,
              leaves : action.payload
           }

           case GET_LEAVE_FAILURE :
           return {
              ...state,
              err : action.payload
           }

           /** Get employee success */
           case GET_EMPPLOYEE_SUCCESS :
           return {
              ...state,
              users : action.payload
           }

            /** Get employee success */
            case GET_EMPLOYEE_FAILURE :
               return {
                  ...state,
                  err : action.payload
               }

                default : return state;
    }


 }

 export default AdminReducer;