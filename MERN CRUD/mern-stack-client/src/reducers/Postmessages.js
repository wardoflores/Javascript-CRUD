// Reducer/fetch operation [5]

import { ACTION_TYPES } from "../actions/Postmessages";

const initialstate = {
    list:[] // Array to Store all postmessages
}

// The value of the action parameter is the same as the object we have passed inside `./actions/Postmessages`
// dispatch of the const fetchall
export const Postmessage = (state = initialstate, action) => { 
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state, // `...` is the split operator.
                list: [...action.payload] // adds postmessage to the Array
            }
        case ACTION_TYPES.CREATE:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case ACTION_TYPES.UPDATE:
            return {
                ...state,
                list: state.list.map(x => x._id == action.payload._id ? action.payload : x)
            }
        case ACTION_TYPES.DELETE:
            return {
                ...state,
                list: state.list.filter(x => x._id != action.payload)
            }      
            
        default:
            return state;
    }
}