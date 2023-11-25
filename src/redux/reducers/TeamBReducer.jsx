/* eslint-disable prettier/prettier */

import {TEAM_SELECTOR_B} from '../types/Types';

const defaultState = {
  teamName: 'Team B',
  scores: 0,
  wickets: 0,
  overs: 0,
  balls: 0,
  CRR: 0,
  RRR: 0,
  extras: 0,
  id: '',
};

const TeamBReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TEAM_SELECTOR_B:
      return {
        ...state,
        teamName: action.teamName,
        scores: action.scores,
        wickets: action.wickets,
        overs: action.overs,
        balls: action.balls,
        CRR: action.CRR,
        RRR: action.RRR,
        extras: action.extras,
        id: action.id,
      };

    default:
      return state;
  }
};
export default TeamBReducer;
