// Reducer/fetch operation [5]

import { ACTION_TYPES } from "../actions/Postmessages";

const initialstate = {
    list:[] // Array to Store all postmessages
}

// The value of the action parameter is the same as the object we have passed inside `./actions/Postmessages`
// dispatch of the const fetchall
export const Postmessage = (state=initialstate, action) => { 
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state, // `...` is the split operator.
                list:[...action.payload] // adds postmessage to the Array
            }
    
        default:
            return state;
    }
}