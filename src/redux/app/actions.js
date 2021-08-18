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

export const playerLoaded = () => ({
  type: types.PLAYER_LOADED
})