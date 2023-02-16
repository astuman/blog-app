import { NEW_POST, FETCH_POSTS } from '../actions/types';

const initialState = {
  items:[]
}

export const PostReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_POSTS:
        return {...state, 
          items:action.payload
         }
    default: 
    return state;
  }
}
