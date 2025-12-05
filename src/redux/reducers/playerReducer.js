import { SET_TRACK } from "../actions/index"

const initialState = {
  current: null,
}

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRACK:
      return { ...state, current: action.payload }

    default:
      return state
  }
}

export default playerReducer
