import { NEW_POST, FETCH_ALBUMS, FETCH_POSTS, DELETE_POST } from '../actions/types';

 const initialState = {
  postedItems:[]
}

export const PostReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_POSTS:
        return {
          ...state,
          postedItems: action.payload
        }
     
       case FETCH_ALBUMS:
        return {
        ...state,
        postedItems:action.payload
        }
        //Delete
        case DELETE_POST:
          return {
          ...state,
          postedItems:[...state.postedItems.filter(postedItems => postedItems.id !== action.payload)]
         }
         default:
          return state;
}}
// const delInitialState = {
//   postedItems: []
// }

// export const DeletePost = (state = delInitialState, action) =>{
//   console.log(state)
//   switch(action.type){
//     case DELETE_POST:
//       return ({
//         ...state,
//         postedItems:[...state.postedItems.filter(Item => Item.id !== action.payload)]
//       })
      
//     default: 
//     return state
    
//   }  
// }
