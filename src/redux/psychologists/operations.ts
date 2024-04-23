import { createAsyncThunk } from "@reduxjs/toolkit";
import { child, get} from "firebase/database";
import { dbRef } from '../../firebase';
import { Psychologist } from "../types";


export const fetchPsychologists = createAsyncThunk(
    'psychologists/fetchAll',
    async (_, thunkAPI) => {
      try {
        const snapshot = await get(child(dbRef, 'psychologists'));
        const psychologistsData: Psychologist[] = [];
        snapshot.forEach((psychologistSnapshot) => {
          psychologistsData.push({
            ...psychologistSnapshot.val(),
            id: psychologistSnapshot.key,
          });
        });
        return psychologistsData;
      } catch (error: any) {
        console.error(error);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );