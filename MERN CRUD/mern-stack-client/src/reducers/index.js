// referred by `store/js` for the reducers [6]

import { combineReducers } from "redux";
import { Postmessage } from "./Postmessages";

export const reducers = combineReducers({
    Postmessage
})