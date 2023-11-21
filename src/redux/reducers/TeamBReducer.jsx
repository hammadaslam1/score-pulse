/* eslint-disable prettier/prettier */

import {TEAM_SELECTOR_B} from '../types/Types';

const defaultState = {
  teamName: 'Team B',
  id: '',
};

const TeamBReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TEAM_SELECTOR_B:
      return {
        ...state,
        teamName: action.teamName,
        id: action.id,
      };

    default:
      return state;
  }
};
export default TeamBReducer;
