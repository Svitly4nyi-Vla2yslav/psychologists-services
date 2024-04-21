import { createSlice } from '@reduxjs/toolkit';
// import { fetchTeachers } from './operations';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { InitialState } from '../types';
import { fetchTeachers } from '../psychologists/operations';

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
      .addCase(fetchTeachers.pending, handlePending)
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTeachers.rejected, handleRejected);
  },
});

const persistConfig = {
  key: "psychologists",
  storage,
};

export const persistedTeacherReducer = persistReducer(
  persistConfig,
  psychologistsSlice.reducer
);