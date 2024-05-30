import { configureStore } from '@reduxjs/toolkit'
// import { themeSlice } from './reducers/theme_slice'
import themeReducer from "./reducers/theme_slice"

export const store = configureStore({
  reducer: {
    theme:themeReducer
  },
})