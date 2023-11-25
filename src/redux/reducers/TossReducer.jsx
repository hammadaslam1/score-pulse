/* eslint-disable prettier/prettier */

import {TOSS_DATA} from '../types/Types';

const defaultState = {
  toss: 'null',
  elect: 'null',
  bat1: 'A Team',
  bat2: 'B Team',
};

const TossReducer = (state = defaultState, action) => {
  // console.log(action.bat2);
  switch (action.type) {
    case TOSS_DATA:
      return {
        ...state,
        toss: action.toss,
        elect: action.elect,
        bat1: action.bat1,
        bat2: action.bat2,
      };

    default:
      return state;
  }
};
export default TossReducer;
