import { createSlice } from '@reduxjs/toolkit';
import { fetchPsychologists } from './operations';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { InitialState } from '../types';

const initialState: InitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const psychologistsSlice = createSlice({
  name: 'psychologists',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(fetchPsychologists.pending, handlePending)
      .addCase(fetchPsychologists.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchPsychologists.rejected, handleRejected);
  },
});

export const setShowLoadMore = (value: boolean) => {
  return {
    type: "loadMore/set",
    payload: value,
  };
};

export const setFilter = (value: string) => {
  return {
    type: "filter/set",
    payload: value,
  };
};

export const setFilterFav = (value: string) => {
  return {
    type: "filterFav/set",
    payload: value,
  };
};

const persistConfig = {
  key: "psychologists",
  storage,
};

export const persistedPsychologistReducer = persistReducer(
  persistConfig,
  psychologistsSlice.reducer
);