export const increment = () => {
    return {
        type : "INCREMENT"
    };
};

export const decrement = () => {
    return {
        type : "DECREMENT"
    };
};


export const reset = () => {
    return {
        type : "RESET"
    };
};


// actions for user
export const addUser = data => {
    return {
        type : 'ADD_USER',
        payload : data
    };
};

export const removeUser = index => {
    return {
        type : 'REMOVE_USER',
        payload : index
    };
};
