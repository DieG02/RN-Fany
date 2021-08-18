import * as types from './types';
import { INITIAL_STATE } from './initialState';

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  
  switch(type) {
    case types.SHOW_PLAYER: 
      return {
        ...state,
        displayPlayer: true,
      }

    case types.HIDE_PLAYER: 
      return {
        ...state,
        displayPlayer: false,
      }

    case types.PLAYER_LOADING:
      return {
        ...state,
        isPlayerLoading: true,
      }

    case types.PLAYER_LOADED:
      return {
        ...state,
        isPlayerLoading: false,
      }

    default: 
      return state;
  }
}

export default reducer;