import { combineReducers } from "redux";

const initialState = {
    counter: 0,
}

interface Action {
    type: string,
}

const counterReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, counter: state.counter + 1 };
        case 'DECREMENT':
            return { ...state, counter: state.counter - 1 };
        default:
            return state;
    }
}

// Combine Reducers
const rootReducer = combineReducers({
    counter: counterReducer,
    // Add other reducers here if you have more
});

export default rootReducer;