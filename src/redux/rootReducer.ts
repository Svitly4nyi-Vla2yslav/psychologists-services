import { combineReducers } from "@reduxjs/toolkit";
import { persistedFavoritesReducer } from "./favorites/favoritesSlice";
import { persistedPsychologistReducer } from "./psychologists/psychologistsSlice";


export const rootReducer = combineReducers({
    favorites: persistedFavoritesReducer,
    psychologists: persistedPsychologistReducer,
});


export type RootState = ReturnType<typeof rootReducer>