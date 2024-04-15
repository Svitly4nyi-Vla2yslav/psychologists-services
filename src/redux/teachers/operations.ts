import { createAsyncThunk } from "@reduxjs/toolkit";
import { child, get} from "firebase/database";
import { dbRef } from '../../firebase';
import { Teacher } from "../types";


export const fetchTeachers = createAsyncThunk(
    'teachers/fetchAll',
    async (_, thunkAPI) => {
      try {
        const snapshot = await get(child(dbRef, 'teachers'));
        const teachersData: Teacher[] = [];
        snapshot.forEach((teacherSnapshot) => {
          teachersData.push({
            ...teacherSnapshot.val(),
            id: teacherSnapshot.key,
          });
        });
        return teachersData;
      } catch (error: any) {
        console.error(error);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );