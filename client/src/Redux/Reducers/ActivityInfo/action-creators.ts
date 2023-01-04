import { createAsyncThunk } from "@reduxjs/toolkit";
 
export const setAppStatusThunk = createAsyncThunk(
    "activityInfo/setAppStatus",
    async(_, thunkAPI) =>
    {
        try {
            const response = null;
            return response;

        } catch (error) {
            return thunkAPI.rejectWithValue("Произошла ошибка при подаче заявки");
        }
        
    }
);