import { combineReducers } from "react-redux";
import { PostReducer } from "./postReducer";

export default combineReducers({
    rootPost:PostReducer 
})