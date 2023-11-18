/* eslint-disable prettier/prettier */
import {applyMiddleware, combineReducers} from 'redux';
import UserReducer from './reducers/UserReducer';
import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  UserReducer,
});

const Store = configureStore({reducer: reducers}, applyMiddleware(thunk));

export default Store;
