/* eslint-disable prettier/prettier */

import {TOSS_DATA} from '../types/Types';

const defaultState = {
  toss: 'null',
  elect: 'null',
};

const TossReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TOSS_DATA:
      return {
        ...state,
        toss: action.toss,
        elect: action.elect,
      };

    default:
      return state;
  }
};
export default TossReducer;
