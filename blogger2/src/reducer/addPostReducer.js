import { fetchPosts } from '../actions/actions';
import { NEW_POST, FETCH_POSTS } from '../actions/types';

const initialState = {
  posts:[]
}

export const AddPostReducer = (state = initialState, action) => {
  switch(action.type){
    case NEW_POST:
        return {
          ...state, 
          posts:action.payload
         }
    default:
      return state;
  }
}
