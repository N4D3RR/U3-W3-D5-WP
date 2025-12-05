import { configureStore } from "@reduxjs/toolkit"

import playerReducer from "../reducers/playerReducer"
import favoritesReducer from "../reducers/favoritesReducer"

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    player: playerReducer,
  },
})

export default store
