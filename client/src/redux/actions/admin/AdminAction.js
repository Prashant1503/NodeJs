import {
    BASE_URL,
    GET_LEAVE_SUCCESS,
    GET_LEAVE_FAILURE,
    getEmployeeSuccess,
    getEmployeeFailure,
    getLeaveSuccess,
    leaveFailure,
    GET_REQUESTED_LEAVE
} from '../../constants';

import axios from 'axios';


/** @function : get all leave requested from employee */
export const getAllLeave =  () => async dispatch =>{

    /** Login request started */
    dispatch({type : GET_REQUESTED_LEAVE,leaves : null});
    
    try {
        
        const token = window.localStorage.getItem("token");
        
        /** Making post call for login */
         await axios.get(`${BASE_URL}/admin/leave-applications`,{
             headers : {'x-auth-token' : token}
         })
        .then(res => {
               
               dispatch(getLeaveSuccess(res.data)) 
        })
        .catch(err => {
           
            dispatch(leaveFailure(err));
        });

    } catch (err) {
        throw(err);
    }

}


/** @function : get all employees */
export const getEmployeeList = () => async dispatch => {


    try {

        const token = window.localStorage.getItem("token");
        
        /** Making post call for login */
         await axios.get(`${BASE_URL}/admin/view-all-employees`,{
             headers : {'x-auth-token' : token}
         })
        .then(res => {
            dispatch(getEmployeeSuccess(res.data))
        })
        .catch(err => {
           
            dispatch(getEmployeeFailure(err.message));
        });

        
    } catch (err) {
        dispatch(getEmployeeFailure(err.message));
    }
}