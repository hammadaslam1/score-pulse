/* eslint-disable prettier/prettier */
import {ADD_USER, REMOVE_USER} from '../types/Types';

const defaultState = {
  user: false,
};

const UserReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user: action.payload,
      };
    case REMOVE_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
export default UserReducer;
