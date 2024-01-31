import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { User } from "./User";


let combain = combineReducers({
        user: User,
    
})
export const store=legacy_createStore(combain,applyMiddleware(thunk))