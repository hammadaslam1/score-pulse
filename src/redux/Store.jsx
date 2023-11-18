/* eslint-disable prettier/prettier */
import {applyMiddleware, combineReducers} from 'redux';
import UserReducer from './reducers/UserReducer';
import InningsReducer from './reducers/InningsReducer';
import MatchFormatReducer from './reducers/MatchFormatReducer';
import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  UserReducer,
  InningsReducer,
  MatchFormatReducer,
});

const Store = configureStore({reducer: reducers}, applyMiddleware(thunk));

export default Store;
