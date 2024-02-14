import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { User } from "./User";
import { UiPrdcuts } from "./Reduser/UIprodcut";


let combain = combineReducers({
      user: User,
      UiPrdcuts:UiPrdcuts
})


export const store=legacy_createStore(combain,applyMiddleware(thunk))