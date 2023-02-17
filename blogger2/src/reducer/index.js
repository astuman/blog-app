import { combineReducers } from "redux";
import { PostReducer } from "./postReducer";


export const rootReducer = combineReducers(
    {
        rootPost:PostReducer
    }
)