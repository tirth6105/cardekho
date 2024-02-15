import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { User } from "./User";
import { Products } from "./Product";


let combain = combineReducers({
        user: User,
        products:Products
})
export const store=legacy_createStore(combain,applyMiddleware(thunk))