import { createAsyncThunk } from "@reduxjs/toolkit";
 
export const getActivitiesThunk = createAsyncThunk(
    "activities/getActivities",
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