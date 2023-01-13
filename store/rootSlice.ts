import {createSlice} from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: 'root',
  initialState:{
    isAuth: false
  },
  reducers: {
    setIsAuth(state) {
      state.isAuth = true
    },
    unsetIsAuth(state) {
      state.isAuth = false
    }
  }
})

export default rootSlice.reducer
export const {setIsAuth, unsetIsAuth} = rootSlice.actions