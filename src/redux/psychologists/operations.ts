import { createAsyncThunk } from "@reduxjs/toolkit";
import { child, get} from "firebase/database";
import { dbRef } from '../../firebase';
import { Teacher } from "../types";


export const fetchTeachers = createAsyncThunk(
    'psychologists/fetchAll',
    async (_, thunkAPI) => {
      try {
        const snapshot = await get(child(dbRef, 'psychologists'));
        const psychologistsData: Teacher[] = [];
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