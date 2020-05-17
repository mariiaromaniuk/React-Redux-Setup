import * as actionTypes from '../actions';

// Assigning the initial state
const initialState = {
    counter: 0
};

// Counter reducer
// takes two elements - current state and an action 
// it applies action to the state and returns updated state
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case actionTypes.DECREMENT:
            // unlike setState in React this is not merging updated param with 
            // other params existing on the state - it rewrites the state and 
            // assign a new set of params we specify here -> copy
            return {
                // first, copy state props with spread operator
                ...state,
                // second, overwrite the state 
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val
            }
    }
    // returns current state, not initial state
    return state;
};

export default reducer;