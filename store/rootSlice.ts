import {createSlice} from "@reduxjs/toolkit";

export type FavoriteCitiesType = {
  key: string
  id: number
  city: string
  lat: number
  lon: number
}


const rootSlice = createSlice({
  name: 'root',
  initialState:{
    isAuth: false,
    favoriteCities: [] as FavoriteCitiesType[], //[{id: number, city: string, lat: decimal, lon: decimal}],
  },
  reducers: {
    setIsAuth(state) {
      state.isAuth = true
    },
    unsetIsAuth(state) {
      state.isAuth = false
    },
    addFavorites(state, action) {
      state.favoriteCities.push(action.payload)
      console.log("Pushed:",action.payload)
    },
    removeFavorites(state, action){
      state.favoriteCities.filter(item => item.id !== action.payload as number)
      console.log("Filtered:", action.payload)
    },

  }
})

export default rootSlice.reducer
export const {setIsAuth, unsetIsAuth, addFavorites, removeFavorites} = rootSlice.actions