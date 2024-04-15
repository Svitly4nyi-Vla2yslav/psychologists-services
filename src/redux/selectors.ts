import { RootState } from "./rootReducer";

const selectTeachers = (state: RootState)=> state.teacher.items;
 
const selectIsLoading = (state: RootState)=> state.teacher.isLoading;

const selectError = (state: RootState)=> state.teacher.error;

const selectFavorites = (state: RootState)=> state.favorites.items;

const selectIsLoadingFav = (state: RootState)=> state.favorites.isLoading;

const selectErrorFav = (state: RootState)=> state.favorites.error;

export {selectTeachers, selectIsLoading, selectError, selectFavorites, selectIsLoadingFav, selectErrorFav};