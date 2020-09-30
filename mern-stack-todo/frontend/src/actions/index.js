// import {composeWithDevTools} from 'redux-devtools-extension';
const redux = require('redux');
const thunkMiddleware = require('redux-thunk').default;
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const axios = require('axios');


// state
const initialState = {
    loading : false,
    task : [],
    error : ''
}

// action type
const FETCH_TODO_REQUEST = 'FETCH_TODO_REQUEST';
const FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS';
const FETCH_TODO_FAILURE = 'FETCH_TODO_FAILURE';


// action creators.
const fetchTodoRequest =() => {
    return {
        type : FETCH_TODO_REQUEST
    }
}

const fetchTodoSuccess =(todos) => {
    return {
        type : FETCH_TODO_SUCCESS,
        payload : todos
    }
}


const fetchTodoError = error => {
    return {
        type : error,
        payload : error
    }
}


// reducer

const reducer = (state = initialState,action) =>  {
    switch(action.type) {
        case FETCH_TODO_REQUEST :
            return {
                ...state,
                loading : true
            }

            case FETCH_TODO_SUCCESS : 
                return {
                    loading : false,
                    todos : action.payload,
                    error : ''
                }

                case FETCH_TODO_FAILURE :
                    return {
                        loading : false,
                        todos : [],
                        error : action.payload
                    }
    }
}



// async action creators..
const fetchTodoList = () => {
    return function(dispatch) {

        dispatch(fetchTodoRequest());
        axios.get('http://localhost:3001/api/task')
        .then(response => {
            // response.data is the array of task.
            const todos = response.data;
            dispatch(fetchTodoSuccess(todos));

        }).catch(error => {
            // error.message
            dispatch(fetchTodoError(error.message));
        });

    }
}

const store = createStore(reducer,applyMiddleware(thunkMiddleware));
store.subscribe(() => {console.log(store.getState())});
store.dispatch(fetchTodoList());


module.exports = store;