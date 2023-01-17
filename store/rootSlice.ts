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

export const addFavoriteCity = createAsyncThunk<FavoriteCitiesType[], string, { rejectValue: string }>(
  'favoriteCities/fetchFavoriteCities',
  async (uid, {rejectWithValue}) => {
    const response = await fetch(`${DB_URL}/fav/${uid}.json?auth=${uid}`)

    if (!response.ok) {
      return rejectWithValue('Server Error!')
    }

    return await response.json()
  })

export const removeFavoriteCity = createAsyncThunk<FavoriteCitiesType[], string, { rejectValue: string }>(
  'favoriteCities/fetchFavoriteCities',
  async (uid, {rejectWithValue}) => {
    const response = await fetch(`${DB_URL}/fav/${uid}.json?auth=${uid}`)

    if (!response.ok) {
      return rejectWithValue('Server Error!')
    }

    return await response.json()
  })



type InitialStateType = {
  isAuth: boolean
  favoriteCities: FavoriteCitiesType[]
  loading: boolean
}

const initialState: InitialStateType = {
  isAuth: false,
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
  }
})

export default rootSlice.reducer
export const {setIsAuth, unsetIsAuth, addFavorites, removeFavorites} = rootSlice.actions