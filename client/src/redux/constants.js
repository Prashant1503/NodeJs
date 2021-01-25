/** 
 * @description : Constants i.e(actions).
 * @required : for authentication
 */

 export var BASE_URL = "http://localhost:4000/api";

        /** LOGIN ACTIONS */


export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

     /** REGISTER ACTIONS */

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

          /** EMPLOYEES ACTIONS */
export const GET_EMPLOYEES = "GET_EMPLOYEES";
export const GET_REQUESTED_LEAVE = "GET_REQUESTED_LEAVE";
export const GET_LEAVE_SUCCESS = "GET_LEAVE_SUCCESS";
export const GET_LEAVE_FAILURE = "GET_LEAVE_FAILURE";
export const UPDATE_LEAVE_STATUS = "UPDATE_LEAVE_STATUS";
export const GET_EMPPLOYEE_SUCCESS = "GET_EMPLOYEE_SUCCESS";
export const GET_EMPLOYEE_FAILURE = "GET_EMP_FAILURE"

     /** LOGOUT USER ACTION */
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

          /** Action creators */

/** @function : login action creator */
export const loginSuccess = (result) => {
     return {
          type : LOGIN_SUCCESS,
          payload :  result
     }
}

export const loginFailure = (err) => {
     return {
          type : LOGIN_FAILURE,
          payload : err.message
     }
}

/** Logout user */
export const logOutSuccess = () => {
     return {
          type : LOGOUT_SUCCESS
     }
}

export const logOutFailure = (err) => {
     return {
          type : LOGOUT_FAILURE,
          payload :err.message
     }

}

          /** Register action creator  */
export const registerationSuccess = (user) => {
    return {
         type : REGISTER_FAILURE,
         payload : user
    }
}

// Registeration failure
export const registerationFailure = (err) => {
     return {
          type : REGISTER_FAILURE,
          payload : err.message
     }
 }


          /** ADMIN PROTECTED REQUEST ACTIONS CREATOR */

/** Get all employee list */
 export const getEmployeeSuccess = (users) => {
      return {
           type : GET_EMPPLOYEE_SUCCESS,
           payload : users
      }
 }

/** Get all emp failure */
 export const getEmployeeFailure = (err) => {
     return {
          type : GET_EMPLOYEE_FAILURE,
          payload : err
     }
}

 /** Get leaves from user */
 export const getLeaveSuccess = (leaves) => {
     return {
          type : GET_LEAVE_SUCCESS,
          payload : leaves
     }
}

 /** failure leave */
 export const leaveFailure = (err) => {
     return {
          type : GET_LEAVE_FAILURE,
          payload : err.message
     }
}

/** Update leave by leaveId */
export const updateLRequestedLeave = (leaveId,leave) => {
     return {
          type : UPDATE_LEAVE_STATUS,
          payload : leave
     }
}

