import { RootState } from "./rootReducer";

const selectTeachers = (state: RootState)=> state.psychologists.items;
 
const selectIsLoading = (state: RootState)=> state.psychologists.isLoading;

const selectError = (state: RootState)=> state.psychologists.error;

const selectFavorites = (state: RootState)=> state.favorites.items;

const selectIsLoadingFav = (state: RootState)=> state.favorites.isLoading;

const selectErrorFav = (state: RootState)=> state.favorites.error;

export {selectTeachers, selectIsLoading, selectError, selectFavorites, selectIsLoadingFav, selectErrorFav};