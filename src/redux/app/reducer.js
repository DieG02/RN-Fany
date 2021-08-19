import * as types from './types';
import { INITIAL_STATE } from './initialState';

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  
  switch(type) {
    case types.SHOW_PLAYER: 
      return {
        ...state,
        displayPlayer: true,
        currentTrack: payload,
      }

    case types.HIDE_PLAYER: 
      return {
        ...state,
        displayPlayer: false,
        currentTrack: {}
      }


    default: 
      return state;
  }
}

export default reducer;