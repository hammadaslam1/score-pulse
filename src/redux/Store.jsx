/* eslint-disable prettier/prettier */
import {applyMiddleware, combineReducers} from 'redux';
import UserReducer from './reducers/UserReducer';
import InningsReducer from './reducers/InningsReducer';
import MatchFormatReducer from './reducers/MatchFormatReducer';
import TeamAReducer from './reducers/TeamAReducer';
import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import TeamBReducer from './reducers/TeamBReducer';
import ProfileReducer from './reducers/ProfileReducer';

const reducers = combineReducers({
  UserReducer,
  InningsReducer,
  MatchFormatReducer,
  TeamAReducer,
  TeamBReducer,
  ProfileReducer,
});

const Store = configureStore({reducer: reducers}, applyMiddleware(thunk));

export default Store;
