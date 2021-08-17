import * as types from './types';

export const showPLayer = () => ({
  type: types.SHOW_PLAYER
})

export const hidePLayer = () => ({
  type: types.HIDE_PLAYER
})

export const playerLoading = () => ({
  type: types.PLAYER_LOADING
})

export const playerLoaded = () => ({
  type: types.PLAYER_LOADED
})