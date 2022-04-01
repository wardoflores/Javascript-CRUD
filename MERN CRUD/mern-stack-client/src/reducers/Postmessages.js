// Reducer/fetch operation

import { ACTION_TYPES } from "../actions/Postmessages";

const initialstate = {
    list:[]
}
export const Postmessage = (state=initialstate, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list:[...action.payload]
            }
    
        default:
            return state;
    }
}