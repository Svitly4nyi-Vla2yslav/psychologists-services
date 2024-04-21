import { createAsyncThunk } from '@reduxjs/toolkit';
import { get, onValue, ref, set } from 'firebase/database';
import { setFavorites } from './favoritesSlice.js';
import { AddFavoritesProps, deleteFavoriteProps } from '../types.js';
import { db } from '../../firebase.js';

export const addFavorite = createAsyncThunk(
    'favorites/addFavorite',
    async ({ userId, psychologist }: AddFavoritesProps) => {
        try {
            const userFavoritesRef = ref(db, `users/${userId}/favorites`);
            const existingFavorites = (await get(userFavoritesRef)).val() || {};
            const updatedFavorites = {
                ...existingFavorites,
                [psychologist.id]: psychologist,
            };
            await set(userFavoritesRef, updatedFavorites);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
);

export const fetchFavorites = createAsyncThunk(
    'favorites/fetchFavorites',
    async (userId: string, { dispatch }) => {
        try {
            const userFavoritesRef = ref(db, `users/${userId}/favorites`);
            onValue(userFavoritesRef, (snapshot) => {
                if (snapshot.exists()) {
                    const favoritesData = snapshot.val();
                    const favoritesArray = Object.values(favoritesData);
                    dispatch(setFavorites(favoritesArray));
                } else {
                    dispatch(setFavorites([]));
                }
            });
        } catch (error) {
            console.error('Error fetching favorites:', error);
            throw error;
        }
    }
);


export const deleteFavorite = createAsyncThunk(
    'favorites/deleteFavorite',
    async ({ userId, psychologistId }: deleteFavoriteProps) => {
        try {
            const userFavoritesRef = ref(db, `users/${userId}/favorites`);
            const existingFavorites = (await get(userFavoritesRef)).val() || {};
            delete existingFavorites[psychologistId];
            await set(userFavoritesRef, existingFavorites);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
);