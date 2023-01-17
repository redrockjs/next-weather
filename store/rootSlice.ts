import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FavoriteCitiesType} from "../types/common-types";

const DB_URL = process.env.NEXT_PUBLIC_DB_URL

export const fetchFavoriteCities = createAsyncThunk<FavoriteCitiesType[], string, { rejectValue: string }>(
  'favoriteCities/fetchFavoriteCities',
  async (uid, {rejectWithValue}) => {
    const response = await fetch(`${DB_URL}/fav/${uid}.json?auth=${uid}`)

    if (!response.ok) {
      return rejectWithValue('Server Error!')
    }

    return await response.json()
  })

export const addFavoriteCity = createAsyncThunk<FavoriteCitiesType, FavoriteCitiesType, { rejectValue: string, state: { uid: string } }>(
  'favoriteCities/addFavoriteCity',
  async (city, {rejectWithValue, getState}) => {

    const uid = getState().uid

    const response = await fetch(`${DB_URL}/fav/${uid}.json?auth=${uid}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application-json'
      },
      body: JSON.stringify(city)
    })

    if (!response.ok) {
      return rejectWithValue('Can\'t add city. Server Error!')
    }

    return await response.json()
  })

export const removeFavoriteCity = createAsyncThunk<number, number, { rejectValue: string, state: { uid: string } }>(
  'favoriteCities/removeFavoriteCity',
  async (id, {rejectWithValue, getState}) => {

    const uid = getState().uid

    const response = await fetch(`${DB_URL}/fav/${uid}/${id}.json?auth=${uid}`, {
      method: 'DELETE'
    })

    if (!response.ok) {
      return rejectWithValue('Can\'t delete task. Server Error!')
    }

    return id
  })

type InitialStateType = {
  isAuth: boolean
  uid: string | null
  favoriteCities: FavoriteCitiesType[]
  loading: boolean
}

const initialState: InitialStateType = {
  isAuth: false,
  uid: null,
  favoriteCities: [],
  loading: false
}

const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    setIsAuth(state) {
      state.isAuth = true
    },
    unsetIsAuth(state) {
      state.isAuth = false
    },
    setUid(state, action) {
      state.uid = action.payload
    },
    unsetUid(state) {
      state.uid = null
    },
    addFavorites(state, action: PayloadAction<FavoriteCitiesType>) {
      state.favoriteCities.push(action.payload)
      console.log("Pushed:", action.payload)
    },
    removeFavorites(state, action: PayloadAction<number>) {
      state.favoriteCities = state.favoriteCities.filter(item => item.id !== action.payload)
      console.log("Filtered:", action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavoriteCities.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchFavoriteCities.fulfilled, (state, action) => {
        state.favoriteCities = action.payload
        state.loading = false
      })
      .addCase(addFavoriteCity.pending, (state) => {
        state.loading = true
      })
      .addCase(addFavoriteCity.fulfilled, (state, action) => {
        //state.favoriteCities.push(action.payload)
        state.loading = false
      })
      .addCase(removeFavoriteCity.pending, (state) => {
        state.loading = true
      })
      .addCase(removeFavoriteCity.fulfilled, (state, action) => {
        state.favoriteCities = state.favoriteCities.filter(city => city.id !== action.payload)
        state.loading = false
      })
  }
})

export default rootSlice.reducer
export const {setIsAuth, unsetIsAuth, addFavorites, removeFavorites} = rootSlice.actions