const redux = require('redux');
const createStore = redux.createStore;

const Buy_Book = "BUY_BOOKS";

// state 
//  A store which is  having state.
const initialState = {
    numberOfBooks : 10
  
}


// action

function buyBook() {
    return {
        type : Buy_Book,
        info : "My First Redux code."
    }

}

// (prevState,action) => newState

const reducer = (state= initialState,action) => {

    switch(action.type) {
        case "BUY_BOOKS" : return {
            ...state,
            numberOfBooks : state.numberOfBooks -1
        }

        default : return state;
    }
}

const store = createStore(reducer);
console.log("Initial State Value : " , store.getState());

const unsubscribe = store.subscribe(() => (console.log('Updatd State value',store.getState())));

store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());

unsubscribe();