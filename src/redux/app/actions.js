import * as types from './types';

export const showPlayer = (track) => ({
  type: types.SHOW_PLAYER,
  payload: track
})

export const hidePlayer = () => ({
  type: types.HIDE_PLAYER
})