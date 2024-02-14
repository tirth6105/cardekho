import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { UiPrdcuts } from "./Reduser/UIprodcut";


let combain=combineReducers({
    UiPrdcuts:UiPrdcuts
})
export const store=legacy_createStore(combain,applyMiddleware(thunk))