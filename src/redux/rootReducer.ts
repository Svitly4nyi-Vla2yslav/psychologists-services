import { combineReducers } from "@reduxjs/toolkit";
import { persistedFavoritesReducer } from "./favorites/favoritesSlice";
import { persistedTeacherReducer } from "./psychologists/psychologistsSlice";


export const rootReducer = combineReducers({
    favorites: persistedFavoritesReducer,
    psychologists: persistedTeacherReducer,
});


export type RootState = ReturnType<typeof rootReducer>