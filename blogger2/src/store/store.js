import { configureStore, createStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { applyMiddleware, compose } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'
import rootReducer from '/reducer';

const initialState = {}
const middleware = [thunk]

 const store = createStore (
  rootReducer, initialState,
  compose(applyMiddleware(...middleware))
);
// //23162679 ->
// // export const configureStore({
// //   reducer: {
// //     counter: counterReducer,
// //   },
// // });
export default store;
