import { createAsyncThunk } from "@reduxjs/toolkit";

export const profileThunk = createAsyncThunk(
    "profile/",
    async(_, thunkAPI) =>
    {
        try {
            const response = null;
            return response;
             
        } catch (error) {
            return thunkAPI.rejectWithValue("error")
        }
        
    }
);