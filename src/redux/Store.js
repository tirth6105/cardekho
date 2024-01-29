import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";


let combain=combineReducers({
    
})
export const store=legacy_createStore(combain,applyMiddleware(thunk))