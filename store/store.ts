import {combineReducers, configureStore} from "@reduxjs/toolkit";
import rootSlice from "./rootSlice";

const rootReducer = combineReducers({
  rootReducer: rootSlice
})

export const store = configureStore({
  reducer: {
    root: rootReducer
  }
})

export type RootStateType = ReturnType<typeof store.getState>