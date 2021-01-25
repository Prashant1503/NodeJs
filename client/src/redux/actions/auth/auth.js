import {
    BASE_URL,
    loginRequest,
    loginFailure,
    loginSuccess,
    registerationFailure,
    registerationSuccess,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    logOutFailure,
    logOutSuccess
} from '../../constants';
import axios from 'axios';


/** @action : login user action */
export const loginUser =  (email,password,history) => async dispatch =>{
   
        /** Login request started */
        
        try {
            
            /** Making post call for login */
             await axios.post(`${BASE_URL}/user/login`,{
                email,
                password
            })
            .then(res => {
                
                    /** storing token on local storage */
                    window.localStorage.setItem("token",res.data.token);
                    dispatch(loginSuccess(res.data));
                    history.push('/'); 
            })
            .catch(err => {
             
                window.localStorage.clear();   
                dispatch(loginFailure(err));
            });

        } catch (err) {
            throw(err);
        }

}

/** @action : register user action */
export const registerUser = (username,email,password,role,dateOfBirth,contact) => async dispatch => {

    try {
        /** Body */
        const body = {
            username,
            email,
            password,
            role,
            dateOfBirth,
            contact
        };

        await axios.post(`${BASE_URL}/user/register`,body)
        .then((err,res) =>{

            if(!err) {
                
                return dispatch(registerationSuccess(res.data));
            }

            window.localStorage.clear();
            return dispatch(registerationFailure(err));
        });

        
    } catch (err) {
        window.localStorage.clear();
        dispatch(registerationFailure(err));
        throw err;
    }
}

/** @action : login user action */
export const logOutUser = (history) => async  => {

    return (dispatch) => {
        const token = window.localStorage.getItem("token");

        if(token) {
            dispatch(logOutSuccess());
            history.push('/login');
        }
        else {
            dispatch(logOutFailure("Not signed in yet"));
        }
    }
    

}