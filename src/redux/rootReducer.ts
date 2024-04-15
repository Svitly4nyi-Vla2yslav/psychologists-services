import { combineReducers } from "@reduxjs/toolkit";
import { persistedFavoritesReducer } from "./favorites/favoritesSlice";
import { persistedTeacherReducer } from "./teachers/teachersSlice";


export const rootReducer = combineReducers({
    favorites: persistedFavoritesReducer,
    teacher: persistedTeacherReducer,
});


export type RootState = ReturnType<typeof rootReducer>