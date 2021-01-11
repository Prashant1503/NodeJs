import {
    REGISTER_USER
}  from './constants';


/** Register function */
export const register = () => ({
    type : REGISTER_USER,
    payload : user
});

