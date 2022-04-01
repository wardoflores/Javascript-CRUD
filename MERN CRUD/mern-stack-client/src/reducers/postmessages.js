import { ACTION_TYPES } from "../actions/postmessage";

const initialstate = {
    list:[]
}
export const postmessage = (state=initialstate, action) => {
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