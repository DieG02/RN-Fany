import * as types from './types';

export const showPlayer = () => ({
  type: types.SHOW_PLAYER
})

export const hidePlayer = () => ({
  type: types.HIDE_PLAYER
})

export const playerLoading = () => ({
  type: types.PLAYER_LOADING
})

export const playerLoaded = (track) => ({
  type: types.PLAYER_LOADED,
  payload: track
})