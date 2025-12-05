import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/index"

const initialState = {
  list: [],
}
const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      if (state.list.find((t) => t.id === action.payload.id)) return state
      return {
        ...state,
        list: [...state.list, action.payload],
      }

    case REMOVE_FAVORITE:
      return {
        ...state,
        list: state.list.filter((t) => t.id !== action.payload),
      }

    default:
      return state
  }
}

export default favoritesReducer
