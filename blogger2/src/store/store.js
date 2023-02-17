import { applyMiddleware, compose, configureStore, createStore } from '@reduxjs/toolkit';
import { rootReducer } from '../reducer';
import { Middleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { FETCH_POSTS } from '../actions/types';
import { PostReducer } from '../reducer/postReducer';

 export const Store = createStore (rootReducer);


export default Store;