import { 
    applyMiddleware,
    compose,
    configureStore,
    createStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducer/reducer';
import { Middleware } from '@reduxjs/toolkit';
import { FETCH_POSTS } from '../actions/types';
import { PostReducer } from '../reducer/postReducer';
import { useReducer } from 'react';
import { useDispatch } from 'react-redux';

const middleware = [thunk]
const dispatch = useDispatch
const initialState = {}



export const Store = configureStore ({
    reducer:rootReducer,
    middleware:middleware
})




//  export const Store = createStore(rootReducer, initialState,
//     compose(
//         applyMiddleware(...middleware)
//     )
//     );

export default Store;