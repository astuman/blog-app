import { combineReducers } from "redux";
import { PostReducer, DeletePost } from "./postReducer";
// import { DeletePost } from './deleteReducer'
import { AddPostReducer } from "./addPostReducer";

export const rootReducer = combineReducers({
    rootPost:PostReducer,
       AddPostReducer,
    //    deletePost:DeletePost
    }
)