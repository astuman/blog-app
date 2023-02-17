import { fetchPosts } from '../actions/actions';
import { NEW_POST, FETCH_POSTS } from '../actions/types';

const initialState = {
  posts:[1, 3]
}

export const PostReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_POSTS:
        return {
          ...state, 
          posts:action.payload
         }
    default:
      return state;
  }
}
