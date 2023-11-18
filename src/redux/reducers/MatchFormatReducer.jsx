/* eslint-disable prettier/prettier */

import {MATCH_FORMAT} from '../types/Types';

const defaultState = {
  totalOvers: 0,
  totalWickets: 10,
  ballType: '',
};

const UserReducer = (state = defaultState, action) => {
  switch (action.type) {
    case MATCH_FORMAT:
      return {
        ...state,
        totalOvers: action.totalOvers,
        totalWickets: action.totalWickets,
        ballType: action.ballType,
      };

    default:
      return state;
  }
};
export default UserReducer;
