/* eslint-disable prettier/prettier */

import {TEAM_SELECTOR_A} from '../types/Types';

const defaultState = {
  teamName: 'Team A',
  id: '',
};

const TeamAReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TEAM_SELECTOR_A:
      return {
        ...state,
        teamName: action.teamName,
        id: action.id,
      };

    default:
      return state;
  }
};
export default TeamAReducer;
