import {REGISTER_USER} from '../action/constants';

// initial state
const initialState = [];

const registerReducer = (state = initialState,action) => {

    switch(action.type) {
        case REGISTER_USER :
            return {...state,user : action.payload}
    }
}

export default registerReducer;