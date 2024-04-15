import { createSlice } from "@reduxjs/toolkit";
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { addFavorite, deleteFavorite } from "./operations";
import { InitialState, Teacher } from "../types";


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
                const teacher = action.payload as unknown as Teacher; 
                if (teacher) {
                    state.items.push(teacher);
                }
            })
            
            .addCase(deleteFavorite.fulfilled, (state, action) => {
                state.isLoading = false;
                const teacher = action.payload as unknown as Teacher;
                if (teacher) {
                    state.items = state.items.filter((item) => item.id !== teacher.id);
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
