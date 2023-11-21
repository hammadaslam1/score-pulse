/* eslint-disable prettier/prettier */
import {PROFILE_DATA} from '../types/Types';

const defaultState = {
  phoneNo: '------',
  jerseyNo: '------',
  email: '------',
  name: '------',
  mainRole: '------',
  bowlingStyle: '------',
  username: '------',
  battingStyle: '------',
  club: 'none',
};

const ProfileReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PROFILE_DATA:
      return {
        ...state,
        phoneNo: action.phoneNo,
        jerseyNo: action.jerseyNo,
        email: action.email,
        name: action.name,
        mainRole: action.mainRole,
        bowlingStyle: action.bowlingStyle,
        username: action.username,
        battingStyle: action.battingStyle,
        club: action.club,
      };

    default:
      return state;
  }
};
export default ProfileReducer;
