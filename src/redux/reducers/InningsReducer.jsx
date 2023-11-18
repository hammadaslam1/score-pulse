/* eslint-disable prettier/prettier */
import {FIRST_INNINGS, SECOND_INNINGS} from '../types/Types';

const defaultState = {
  totalScore: 0,
  wickets: 0,
  overs: 0,
  extras: 0,
  runRate: 0,
  sixes: 0,
  fours: 0,
};

const InningsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FIRST_INNINGS:
      return {
        ...state,
        totalScore: action.totalScore,
        wickets: action.wickets,
        overs: action.overs,
        extras: action.extras,
        runRate: action.runRate,
        sixes: action.sixes,
        fours: action.fours,
      };
    case SECOND_INNINGS:
      return {
        ...state,
        totalScore: action.totalScore,
        wickets: action.wickets,
        overs: action.overs,
        extras: action.extras,
        runRate: action.runRate,
        sixes: action.sixes,
        fours: action.fours,
      };

    default:
      return state;
  }
};
export default InningsReducer;
