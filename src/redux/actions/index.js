export const ADD_FAVORITE = "ADD_FAVORITE"
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"
export const SET_TRACK = "SET_TRACK"

export const addFavorite = (track) => ({
  type: ADD_FAVORITE,
  payload: track,
})

export const removeFavorite = (id) => ({
  type: REMOVE_FAVORITE,
  payload: id,
})

export const setTrack = (track) => ({
  type: SET_TRACK,
  payload: track,
})
