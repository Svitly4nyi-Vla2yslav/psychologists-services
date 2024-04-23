import { createSlice } from "@reduxjs/toolkit";
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { addFavorite, deleteFavorite } from "./operations";
import { InitialState, Psychologist } from "../types";


const initialState: InitialState = {
    items: [],
    isLoading: false,
    error: null ,
};

const handlePending = (state: InitialState) => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };


export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        setFavorites: (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addFavorite.rejected, handleRejected)
            .addCase(addFavorite.pending, handlePending)
            .addCase(addFavorite.fulfilled, (state, action) => {
                state.isLoading = false;
                const psychologist = action.payload as unknown as Psychologist; 
                if (psychologist) {
                    state.items.push(psychologist);
                }
            })
            
            .addCase(deleteFavorite.fulfilled, (state, action) => {
                state.isLoading = false;
                const psychologist = action.payload as unknown as Psychologist;
                if (psychologist) {
                    state.items = state.items.filter((item) => item.id !== psychologist.id);
                }
            })
            .addCase(deleteFavorite.rejected, handleRejected);
    },
});

const persistConfig = {
    key: "favorites",
    storage,
};

export const persistedFavoritesReducer = persistReducer(
    persistConfig,
    favoritesSlice.reducer
);
export const { setFavorites } = favoritesSlice.actions;
